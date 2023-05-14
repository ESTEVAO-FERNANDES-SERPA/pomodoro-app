import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <section class="pomo">
  <app-sidebar></app-sidebar>
  <div class="box-pomo">
      <router-outlet></router-outlet>
  </div>
</section>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
}
