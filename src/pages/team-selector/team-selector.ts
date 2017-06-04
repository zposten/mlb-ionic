import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '..'

import Teams, {Team} from './teams'

/**
 * Generated class for the TeamSelectorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-team-selector',
  templateUrl: 'team-selector.html',
})
export class TeamSelectorPage {

  public teams: Team[] = Teams;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamSelectorPage');
  }

  selectTeam($event, team: Team) {
    this.navCtrl.setRoot(TabsPage, team);
  }

}
