import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
  
  constructor() {
    console.log('In Constructor');
  }
  ngOnInit(): void {
    console.log('On Init')
  }

}
