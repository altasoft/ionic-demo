import { Component } from '@angular/core';
import { PopoverController, AlertController } from 'ionic-angular';

import { PopoverPage } from '../about-popover/about-popover';

@Component({
  selector: 'page-inputs',
  templateUrl: 'inputs.html'
})
export class InputsPage {
  conferenceDate = '2047-05-17';

  constructor(public popoverCtrl: PopoverController, private alertCtrl: AlertController) { }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }

  createLoan() {
    this.alertCtrl.create({
      title: 'Loan created!',
      subTitle: 'You can now check your bank account & get money',
      buttons: ['Great']
    }).present();
  }
}
