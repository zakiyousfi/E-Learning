import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  userId:any;
  ngOnInit(){
    this.userId=localStorage.getItem("userId");
    console.log(this.userId)
    
  }
}
