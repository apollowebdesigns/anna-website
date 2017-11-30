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

  onSubmit() {console.log('completed!!!');  }

  constructor() { }

  ngOnInit() {
  }

}
