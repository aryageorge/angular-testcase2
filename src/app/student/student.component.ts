import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  public studentname:string='';
  public studentplace:string='';
  constructor(public activerouter:ActivatedRoute){
    console.log("activerouter",ActivatedRoute);
    
    activerouter.params.subscribe((param:any)=>{
      console.log(param);
      
      this.studentname=param.studentname;
      this.studentplace=param.studentplace;
    })
  }

}
