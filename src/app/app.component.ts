import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Test';
  allowServer = false;
  getStatus(){
    return this.name;
  }

  constructor(){
    // setTimeout(() => {
    //   this.allowServer = true;
    // }, 2000)
 
  }
  ngOnInit(){

  }
}
