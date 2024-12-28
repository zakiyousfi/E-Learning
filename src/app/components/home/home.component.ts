import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userId:any;
  ngOnInit(){
    this.userId=localStorage.getItem("userId");
    console.log(this.userId)
    
  }
}
