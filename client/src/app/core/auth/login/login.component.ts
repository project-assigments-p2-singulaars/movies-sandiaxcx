import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserLogin } from '../../../shared/interfaces/users';
// import { AuthService } from 'app/core/services/auth.service';
// import { UserLogin } from 'app/shared/models/user';
// import { Router } from '@angular/router';
// import { MatTab, MatTabGroup, MatTabLabel } from '@angular/material/tabs';
// import { RegisterComponent } from "../register/register.component";
// import { MatError, MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
// import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
// import { MatInputModule } from '@angular/material/input';
// import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  private authService = inject(AuthService)
  private formBuilder= inject(FormBuilder)
  router = inject(Router);
  loginForm!:FormGroup;
  // matcher = new CustomErrorStateMatcher();


  ngOnInit(): void {

    this.loginForm=this.formBuilder.group({
      email: ["", Validators.required],
      password:["",Validators.required]
    });
  }

  
  submit(){
    const user:UserLogin={
      email:this.loginForm.controls["email"].value,
      password:this.loginForm.controls["password"].value,
    }
    if(this.loginForm.valid){
      console.log("pass1");
      const logResult = this.authService.login(user).subscribe(r=>{
        this.router.navigateByUrl('home')
      });

      console.log("logResult",logResult)
      console.log("pass2",user)
    }
  };
  
}
