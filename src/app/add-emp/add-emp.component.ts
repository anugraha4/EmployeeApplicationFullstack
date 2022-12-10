import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {
  constructor(private api:ApiService){}
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
    console.log(data)
    this.api.addEmployee(data).subscribe(
      (respons:any)=>{
        console.log(respons)
        if(respons.status=="success")
        {
          this.empcd=""
          this.empname=""
          this.designation=""
          this.salary=""
          this.empname=""
          this.mobno=""
          this.username=""
          this.password=""

        }
        else{
          alert("Something went wrong")
        }
      }
    )
  }
}
