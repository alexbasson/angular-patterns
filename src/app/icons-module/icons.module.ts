import {Component, NgModule} from '@angular/core';

@Component({
  selector: 'svg[icon-gear]',
  templateUrl: './icon-gear.component.html'
})
export class IconGearComponent {
}

@NgModule({
  declarations: [
    IconGearComponent,
  ],
  exports: [
    IconGearComponent,
  ]
})
export class IconsModule {
}
