import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('myAnimation', [
      // Define your animation here
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter, :leave', animate('0.5s ease-in-out'))
    ])
  ]
})
export class HeaderComponent {
  constructor(
    private spinner: NgxSpinnerService,
    private userService:UserService,
    private router:Router

  ){

  }
  ngOnInit(){
    this.userId=localStorage.getItem("userId");
    console.log(this.userId);

    
  }
  email="";
  password=""
  user:any;
  userId:any;

  activeregisterPanel(){
    const container = document.getElementById('container');
    container?.classList.add("active");
  }
  activeLoginPanel(){
    const container = document.getElementById('container');
    container?.classList.remove("active");
  }
  signUp(f:NgForm){
    this.user=f.value;
    console.log("test")
    console.log(this.user)
    this.spinner.show();
    this.userService.addUser(this.user)
      .subscribe(
        res=>{
          setTimeout(() => { 
            this.user=res
            localStorage.setItem("userId",this.user.id);
            this.ngOnInit();
            


            this.spinner.hide();
          }, 3000);
        },
        err=>{
          console.log(err)
        }
      )
    
   
   
  }




  logIn(f:NgForm){
    console.log ("test")
    console.log(f.value)
    this.spinner.show();

    this.userService.login(f.value['login'],f.value['p'])
    .subscribe(
      res=>{
        console.log(res)
        if(res){
          this.user=res[0];
          localStorage.setItem("userId",this.user.id);
          this.ngOnInit();


          if(this.user.id=="4b39"){
            console.log("ok")

            this.router.navigateByUrl("/admin")
            // location.reload();
          }
          console.log(this.user)
          setTimeout(() => {            
            this.spinner.hide();
          }, 2000);
          Swal.fire({
            title: "Log In Successfully !",
            text:"welcome to your account ",
            icon: "success"
          });
        }
        
      },
      

    )
    
    
  }
  logOut(){
    localStorage.setItem("userId","");
    this.ngOnInit();
  }
  test(condition:any,errorMessage:string){
    if (condition) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    }
  }

  patternTest(condition:any,errorMessage:string){
    if (condition) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    }
  }
}
