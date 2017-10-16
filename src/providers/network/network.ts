import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import 'rxjs/add/operator/map';

@Injectable()
export class NetworkProvider {

  constructor(private network: Network) {

    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');

    });

    let connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('network connected!');

    });
  }




}
