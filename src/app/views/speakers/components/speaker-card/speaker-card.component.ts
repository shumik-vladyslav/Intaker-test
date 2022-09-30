import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Speaker } from 'src/app/shared/models/application.model';

@Component({
  selector: 'app-speaker-card',
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.scss']
})
export class SpeakerCardComponent implements OnInit {
  @Input() speaker: Speaker;
  @Input() styleClass: string;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
   
  }

  details(id: string) {
    this.router.navigate([`/speakers/details/${id}`])
  } 

}
