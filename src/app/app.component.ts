import { Component } from '@angular/core';
import {CopyContentService} from './copy-content.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular Copy';

  someContentToCopy = "Some content to copy!..";
  constructor(private copier:CopyContentService){

  }

  doCopy(){
    this.copier.copyText(this.someContentToCopy);
    alert('Your content is copied. Paste in text editor to see copied content(ctrl + V, cmd+ V)');
  }
}
