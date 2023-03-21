import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {
  AnnouncementComponent,
  AnnouncementComponentTagsDirective
} from './announcement';
import { AppComponent } from './app.component';
import {
  CollectionPanelComponent,
  CollectionPanelComponentTagsDirective
} from './collection-panel';

@NgModule({
  declarations: [
    AnnouncementComponent,
    AnnouncementComponentTagsDirective,
    AppComponent,
    CollectionPanelComponent,
    CollectionPanelComponentTagsDirective
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
