import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SpinnerService } from './core/services/spinner.service';

@Component({
  selector: 'app-spinner',
  template: ` <div class="spinner" *ngIf="loading$ | async">
    <div class="center">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  </div>`,
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  loading$ = this.spinner.loading$;

  constructor(private spinner: SpinnerService) {}
}
