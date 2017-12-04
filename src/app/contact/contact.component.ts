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
  url = 'https://kdvyzajvee.execute-api.eu-west-2.amazonaws.com/prod/ContactLambda';

  async onSubmit() {
    try {
      const response = await fetch(this.url, {
        method: 'POST',
        body: JSON.stringify(this.model),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        return jsonResponse;
      }
    } catch (error) {
      console.log(error);
    }
  }

  constructor() {}

  ngOnInit() {
  }

}
