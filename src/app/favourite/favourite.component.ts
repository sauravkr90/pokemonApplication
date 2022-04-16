import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
 
  constructor(private obj:HomeComponent) { }
  newArr:any[]=this.obj.arr;
  newFavArr:any[]=this.obj.arrFav;
  ngOnInit(): void {
 
  }
  
  // show(){
  //   this.obj.arrFav.map(i=>{
  //     console.log(this.obj.arr[i].name);
  //   });
  //   // this.obj.arrFav.map(i=>{
  //   //   this.newFavArr.push(i);
  //   // })
  // }
  

}
