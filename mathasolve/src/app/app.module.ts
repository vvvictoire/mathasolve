import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberDisplayComponent } from './number-display/number-display.component';
import { RulesComponent } from './rules/rules.component';
import { TimerComponent } from './timer/timer.component';
import { TimePipe } from './time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NumberDisplayComponent,
    RulesComponent,
    TimerComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
