import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent {
  empcd=""

  edit=()=>
  {
    let edi:any={"empcd":this.empcd}
    console.log(edi);
  }
}
