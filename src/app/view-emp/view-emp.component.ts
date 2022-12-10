import { Component } from '@angular/core';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent {
  data:any=[
    {
      "empcd":2423,
      "empname":"anu",
      "designation":"Software",
      "salary":266,
      "cmpname":"nset",
      "mobno":"65989900"
    
    
    },
    
      {
        "empcd":51275,
        "empname":"Manu",
        "designation":"Software",
        "salary":6587900,
        "cmpname":"aple@gmal.com",
        "mobno":"456789"
      
      
      },
      {
        "empcd":51345,
        "empname":"Tanu",
        "designation":"Software",
        "salary":23000,
        "cmpname":"tcs",
        "mobno":"4567890"
      
      
      }
    
  
  ]
}
