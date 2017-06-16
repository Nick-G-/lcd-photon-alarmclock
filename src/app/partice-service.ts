import {Injectable, OnInit} from '@angular/core';
import * as ParticleAPI from 'particle-api-js';

@Injectable()
export class ParticleService implements OnInit{

  particle: ParticleAPI;
  token;

  constructor() {
    this.particle = new ParticleAPI();

    this.particle.login({username: 'lucas.manzanelli@ing.austral.edu.ar', password: 'manzasebasjose'}).then(data => {
      this.token = data.body.access_token;
      console.log('Login response: ', data, this.token);

    }, err => {
      console.log('Could not login', err);
    });
  }

  ngOnInit(): void {
  }

  sendAlarmTimeToPhoton(timestamp) {
    this.particle.callFunction({ deviceId: '2b0035001647343337363432', name: 'LEDControl', argument: timestamp, auth: this.token })
      .then(data => {
        console.log('Function called successfully:', data);

      }, err => {
        console.log('An error occurred:', err);
      });
  }

  test(ledStatus: string) {
    this.particle.callFunction({ deviceId: '2b0035001647343337363432', name: 'LEDControl', argument: ledStatus, auth: this.token })
    .then(data => {
        console.log('Function called succesfully:', data);

        }, err => {
        console.log('An error occurred:', err);
      });
  }


}
