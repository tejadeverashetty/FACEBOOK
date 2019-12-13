import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm: FormGroup;
  constructor(private formbuilder:FormBuilder) { }
  get f() { return this.forgotForm.controls; }

  ngOnInit() {

    this.forgotForm = this.formbuilder.group({
      mail_id: ['', [Validators.required, Validators.email]]

     });
  }
  }


