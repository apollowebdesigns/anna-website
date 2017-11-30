import {Component, NgModule, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageDetails } from '../message-details';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

@NgModule({
  imports: [
    FormsModule
  ]
})

export class ContactComponent implements OnInit {

  model = new MessageDetails('hello', 'hello@123.gmail.com', 'erjhwiehr');
  url = 'https://uyolovpg91.execute-api.us-west-2.amazonaws.com/prod/contactHandler';

  onSubmit() {

    function reqListener () {
      console.log(this.responseText);
    }

    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', reqListener);
    oReq.open('GET', this.url);
    oReq.send();
  }

  constructor() {}

  ngOnInit() {
  }

}
