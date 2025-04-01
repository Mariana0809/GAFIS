import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { 
      this.loginForm = this.fb.group({
      documentNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }
    
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
  }
}
