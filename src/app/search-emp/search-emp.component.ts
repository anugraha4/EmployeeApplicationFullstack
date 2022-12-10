import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-emp',
  templateUrl: './search-emp.component.html',
  styleUrls: ['./search-emp.component.css']
})
export class SearchEmpComponent {

  constructor(private api:ApiService){}
  empcd=""
searchData:any=[]
  search=()=>
  {
    let sea:any={"empcd":this.empcd}
    console.log(sea)
    this.api.searchEmployee(sea).subscribe(
      (response:any)=>{

        console.log(response)
        if (response.length==0) {
          alert("Invalid Employee code")
          
        } else {
          this.searchData=response
        }
      }
    )
  }
}
