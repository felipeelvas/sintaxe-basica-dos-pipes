import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserStatusPipe } from './pipes/user-status.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { JsonComponent } from './json/json.component';
import { UppercaseComponent } from './uppercase/uppercase.component';
import { LowercaseComponent } from './lowercase/lowercase.component';
import { SliceComponent } from './slice/slice.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';

@NgModule({
  declarations: [
    AppComponent,
    UserStatusPipe,
    TruncatePipe,
    JsonComponent,
    UppercaseComponent,
    LowercaseComponent,
    SliceComponent,
    TitlecaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
