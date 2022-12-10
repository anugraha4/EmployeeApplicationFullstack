import { Component } from '@angular/core';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {
  empcd=""
  empname=""
  designation=""
  salary=""
  cmpname=""
  mobno=""
  username=""
  password=""

  readValues = ()=>
  {
    let data:any={
      "empcd":this.empcd,
      "empname":this.empname,
      "designation":this.designation,
      "salary":this.salary,
      "cmpname":this.cmpname,
      "mobno":this.mobno,
      "username":this.username,
      "password":this.password
    
    
    
    }
    console.log(data);
  }
}
