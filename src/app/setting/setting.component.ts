import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  settingsForm: FormGroup;

  get city() {
    return this.settingsForm.get('city');
  }

  get code() {
    return this.settingsForm.get('code');
  } 

  constructor(private fb : FormBuilder, private router : Router) { }

  ngOnInit() {
    this.settingsForm = this.fb.group({
      'city': ['', Validators.required],
      'code': ['', Validators.required]
    })
  }

  settings(formData) {
    let location = {
      city:formData.city,
      code:formData.code
    }
    localStorage.setItem('location',JSON.stringify(location));
    this.router.navigate(['/home']);
  }

}
