import { Component, OnInit } from '@angular/core';
// import { elementAt } from 'rxjs';
import { PdataService } from '../pdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  arr:any[] = [];
  val:any="";
  arrFav:any[]=[];
  
 
  constructor(private obj:PdataService) { }

  ngOnInit(): void {
  
    this.obj.getPokees().subscribe((response:any)=>{


       response.results.forEach((element:any) => {
            this.obj.getMorePokees(element.name).subscribe((resp:any)=>{
              this.arr.push(resp);
              console.log(this.arr);
            });
      console.log(response);

            
       });
    });
  }

// fav(){
//   console.log(this.item);
// }

fav(value:any){
 
    this.arrFav.push(value);
  
// alert(this.arr[value].name);
}


}

