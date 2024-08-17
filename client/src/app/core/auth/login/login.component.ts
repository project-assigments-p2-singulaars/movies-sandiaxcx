import { Component } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { RouterLink } from '@angular/router';
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
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  // loginForm!:FormGroup;

  // submit(){
  //   const user:UserLogin={
  //     userName:this.loginForm.controls["username"].value,
  //     password:this.loginForm.controls["password"].value,
  //   }
  //   if(this.loginForm.valid){
  //     console.log("pass1");
  //     const logResult = this.authService.login(user).subscribe(r=>{
  //       this.router.navigateByUrl('')
  //     });

  //     console.log("logResult",logResult)
  //     console.log("pass2",user)
  //   }
  // };
}
