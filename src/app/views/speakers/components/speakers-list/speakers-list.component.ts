import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { combineLatest, debounceTime, map, startWith } from 'rxjs';
import { Speaker } from 'src/app/shared/models/application.model';
import { SpeakersListFacade } from '../../store/facades';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.scss']
})
export class SpeakersListComponent implements OnInit {

  searchControl = this.fb.control(null);

  filter$ = this.searchControl.valueChanges.pipe(debounceTime(400), startWith(''));

  speakersList$ = combineLatest([this.filter$, this.speakersListFacade.speakersList$]).pipe(
    map(([search, items]) => {
      if (search) {
        return items?.filter((item: Speaker) => item.value.toLowerCase().startsWith(search?.toLowerCase()))
      }
      return items
    })
  );

  constructor(
    private speakersListFacade: SpeakersListFacade,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.speakersListFacade.loadSpeakersList()
  }

}
