import { Component, OnInit } from '@angular/core';
// import { PdataService } from '../pdata.service';

import { HomeComponent } from '../home/home.component';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private arrObj:HomeComponent) { }
  search : any="";
  flag=false;
  found=false;
  ans:any;
  notFound:any;
  ngOnInit(): void {
    
  }
  // func(){
  //   // if(this.search=""){
  //   //   this.ngOnInit();
  //   // }
  //   // else{
  //   //   console.log(this.search);
  //   // }
  //   // console.log(this.obj.getMorePokees(this.search));


  //   this.obj.getPokees().subscribe((response:any)=>{

  //     response.results.forEach((element:any) => {
  //          this.obj.getMorePokees(element.name).subscribe((resp:any)=>{
  //            this.arr.push(resp);
  //           // console.log( this.arr.filter((item : any)=>item ==="sprites"));
  //          for(let i of this.arr){
  //            if(i.name===this.search){
  //              this.ans=i.sprites.front_default;
  //            }
  //           //  else{
  //           //    this.ans="not found";
  //           //  }
           
  //          }

  //          });
  //   //  console.log(response);

           
  //     });
  //  });
    
  // }
 

  func(){
  // //   for(let i of this.arrObj.arr){
  // //     if(i.name===this.search){
  // //       this.ans=i.sprites.front_default;
  // //     }
  // // }
  // this.send=this.search;
  this.flag=true;
  this.arrObj.arr.forEach(i=>{
    if(i.name===this.search){
      this.found=true;
      this.ans=i; 
    }
    else{
      this.notFound="There is no pokemon of this name";
    }
  });
  
  }

}

