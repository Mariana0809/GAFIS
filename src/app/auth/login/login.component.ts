import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';
@Component({
  selector: 'app-login',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private loginService:LoginService) { 
      this.loginForm = this.fb.group({
      role: ['', Validators.required],
      documentNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      password: ['', Validators.required],
      
    });
  }
  get documentNumber(){
    return this.loginForm.get('documentNumber') as FormControl;

  }
  get password(){
    return this.loginForm.get('password') as FormControl;
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      alert('Por favor, completa todos los campos correctamente.');
      this.loginForm.markAllAsTouched();
      return;
    }else{
    const selectedRole = this.loginForm.get('role')?.value;  
    // Redirigir según el rol seleccionado
    switch (selectedRole) {
      case 'Instructor':
        this.router.navigate(['/dashboard/instructor']);
        break;
      case 'Administrador':
        this.router.navigate(['/dashboard/admin']);
        break;
      case 'Super Administrador':
        this.router.navigate(['/dashboard/superadmin']);
        break;
      default:
        console.error('Rol no reconocido');
    }
    this.loginService.login(this.loginForm.value);
    this.loginForm.reset();
  }
    }
  
    
}
