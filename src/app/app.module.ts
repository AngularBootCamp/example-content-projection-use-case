import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {
  AnnouncementComponent,
  AnnouncementComponentChildrenComponent
} from './announcement.component';
import { AppComponent } from './app.component';
import {
  CollectionPanelChildrenComponent,
  CollectionPanelComponent
} from './collection-panel.component';

@NgModule({
  declarations: [
    AnnouncementComponent,
    AnnouncementComponentChildrenComponent,
    AppComponent,
    CollectionPanelComponent,
    CollectionPanelChildrenComponent
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
