import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeakersService } from '../../services/speakers.service';
import { SpeakersFacade } from '../../store/facades';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.scss']
})
export class SpeakerDetailsComponent implements OnInit {

  speaker$ = this.speakersFacade.speaker$;

  constructor(
    private speakersFacade: SpeakersFacade,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    const speakerId = this.route.snapshot.params['id'];
    this.speakersFacade.loadSpeaker(speakerId)
  }

  goToList() {
    this.router.navigate(['/speakers'])
  }

}
