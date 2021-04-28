import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  forgotPassword(email){
    alert('נשלח דוא"ל לאיפוס סיסמה, בדוק את תיבת הדואר הנכנס שלך.');
  }

}
