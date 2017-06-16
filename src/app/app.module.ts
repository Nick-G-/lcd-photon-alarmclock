import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';

import { AppComponent } from './app.component';

// Material Design
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PhotonControlsComponent } from './photon-controls/photon-controls.component';
import {ParticleService} from './partice-service';

@NgModule({
  declarations: [
    AppComponent,
    PhotonControlsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    NguiDatetimePickerModule
  ],
  providers: [ParticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
