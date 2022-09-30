import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

enum RecordEvent {
  Wait = 0,
  Start = 1,
  Stop = 2,
}

@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.scss']
})
export class VideoContainerComponent implements OnInit {

  @ViewChild('preview') preview: ElementRef;
  @ViewChild('recording') recording: ElementRef;
  @ViewChild('downloadButton') downloadButton: ElementRef;

  eventType = RecordEvent.Wait;

  constructor() {
  }

  ngOnInit() {
  }

  start() {
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then((stream) => {
      this.eventType = RecordEvent.Start;
      this.preview.nativeElement.srcObject = stream;
      this.downloadButton.nativeElement.href = stream;
      this.preview.nativeElement.captureStream = this.preview.nativeElement.captureStream || this.preview.nativeElement.mozCaptureStream;
      return new Promise((resolve) => this.preview.nativeElement.onplaying = resolve);
    }).then(() => this.startRecording(this.preview.nativeElement.captureStream()))
    .then (async (recordedChunks) => {
      let recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
      this.recording.nativeElement.src = URL.createObjectURL(recordedBlob);
      this.downloadButton.nativeElement.href = this.recording.nativeElement.src;
      this.downloadButton.nativeElement.download = "RecordedVideo.webm";
    })
  }

  stop() {
    this.eventType = RecordEvent.Stop;
    this.preview.nativeElement.srcObject.getTracks().forEach((track: any) => track.stop());
  }

  startRecording(stream: any) {
    let recorder = new MediaRecorder(stream);
    let data: any = [];

    recorder.ondataavailable = (event) => data.push(event.data);
    recorder.start();

    let stopped = new Promise((resolve, reject) => {
      recorder.onstop = resolve;
      recorder.onerror = (event: any) => reject(event.name);
    });

    return Promise.all([
      stopped,
    ])
    .then(() => data);
  }
}
