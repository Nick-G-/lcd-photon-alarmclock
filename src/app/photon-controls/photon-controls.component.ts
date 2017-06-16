import { Component, OnInit } from '@angular/core';
import {ParticleService} from '../partice-service';

@Component({
  selector: 'app-photon-controls',
  templateUrl: './photon-controls.component.html',
  styleUrls: ['./photon-controls.component.scss']
})
export class PhotonControlsComponent implements OnInit {

  myDate;
  ledStatus;
  parsedDate: number;

  constructor(private _service: ParticleService) {
  }

  ngOnInit() {
  }

  sendAlarmToPhoton() {
    this.parsedDate = Math.floor(new Date(this.myDate).getTime() / 1000);
    console.log(this.myDate, this.parsedDate);
    this._service.sendAlarmTimeToPhoton(this.parsedDate.toString());
  }

  test() {
    this._service.test(this.ledStatus);
  }

}
