import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.css']
})
export class LoginInfoComponent implements OnInit {
  account = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    country: '',
    state: '',
    city: '',
    zip: '',
    categories : []
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }
  login(em,pswd){
    console.log(em.value,pswd.value);
  

    let wrongCredentials = true;
   let accounts = JSON.parse(localStorage["accounts"]);
   for(let account of accounts){
     if(em.value == account.email && 
      pswd.value == account.password ){
        wrongCredentials = false;
        this.router.navigate(['/afterlogin']);
      }
   }

   if(wrongCredentials){
     alert("please verify your email or password")
   }

  }

  register(em1,pswd1) {
    console.log(em1.value,pswd1.value);
    
    this.account.email = em1.value;
    this.account.password = pswd1.value;
    
    console.log(this.account);
        let existingAccount = false;
        if (localStorage.accounts) {
          const accounts = JSON.parse(localStorage.accounts);
          for (let i = 0; i < accounts.length; i++) {
            if ( em1.value === accounts[i].email) {
              existingAccount = true;
              alert('account already existing');
              break;
            }
          }
     
          if (!existingAccount) {
          accounts.push(this.account);
          localStorage.accounts = JSON.stringify(accounts);
          this.router.navigate(['/']);
          }
        } else {
         localStorage.accounts = JSON.stringify([this.account]);
         this.router.navigate(['/']);
        }
       
    
      }
}
