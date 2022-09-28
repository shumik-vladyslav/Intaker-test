import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { SpeakersListFacade } from '../../store/facades';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.scss']
})
export class SpeakersListComponent implements OnInit {

  speakersList$ = this.speakersListFacade.speakersList$;

  constructor(private speakersListFacade: SpeakersListFacade) { }

  ngOnInit(): void {
    this.speakersListFacade.loadSpeakersList()
  }

}
