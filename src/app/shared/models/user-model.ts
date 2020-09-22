import { FormControl, FormGroup, Validators } from '@angular/forms';

export class user {
    email:string;
    password:string;
}

export class userModelFormBuilder {

    userModel: user = {
      email: null,
      password: null
    };
  
    userForm: FormGroup = new FormGroup({
      email: new FormControl(this.userModel.email, [Validators.required]),
      password: new FormControl(this.userModel.password, [Validators.required]),
    });
  
    constructor() {
      this.userForm.valueChanges.subscribe(val => {
        this.userModel.email = val.email;
        this.userModel.password = val.password;
      });
    }
  
    setModelVals(res: any) {
      this.userForm.controls.email.setValue(res.email);
      this.userForm.controls.password.setValue(res.password);
    }
}