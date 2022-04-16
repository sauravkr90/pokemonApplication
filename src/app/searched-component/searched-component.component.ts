import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-searched-component',
  templateUrl: './searched-component.component.html',
  styleUrls: ['./searched-component.component.css']
})
export class SearchedComponentComponent implements OnInit {

  constructor(private obj:NavbarComponent,private arrObj:HomeComponent) { }
  ans=this.obj.func();
  ngOnInit(): void {
  }



}
