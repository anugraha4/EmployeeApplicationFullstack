import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.css']
})
export class DeleteEmpComponent {
  empcd=""

  delete=()=>
  {
    let del:any={"empcd":this.empcd}
  console.log(del)
  }
}
