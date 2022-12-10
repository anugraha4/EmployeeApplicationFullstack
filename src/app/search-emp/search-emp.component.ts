import { Component } from '@angular/core';

@Component({
  selector: 'app-search-emp',
  templateUrl: './search-emp.component.html',
  styleUrls: ['./search-emp.component.css']
})
export class SearchEmpComponent {
  empcd=""

  search=()=>
  {
    let sea:any={"empcd":this.empcd}
    console.log(sea)
  }
}
