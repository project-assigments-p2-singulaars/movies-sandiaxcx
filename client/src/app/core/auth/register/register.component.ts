import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  authService = inject(AuthService);
  registerForm: FormGroup;
  submitted = false;


  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      // username: ['', [Validators.required, Validators.minLength(3)]],
      email: [''],
      password: ['']
      // email: ['', [Validators.required, Validators.email, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
      // password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/), Validators.minLength(8)]],
    });
  }

  submit() {
    console.log( "submit pressed" );
    this.submitted = true;
    if (this.registerForm.valid) {
      const newUser = {
        // userName: this.registerForm.value.username,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
      };
      console.log(newUser);

      this.authService.register(newUser).subscribe(
        response => {
          console.log('Registration successful:', response);
          // this.openDialog();
          // this.router.navigateByUrl('');
          // this.resetForm();
        },
        error => console.error('Registration error:', error)
      );
    }
}


resetForm() {
  this.registerForm.reset();
  this.submitted = false;
}

}
