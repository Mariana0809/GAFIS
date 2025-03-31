import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup; // Agrega "!" para evitar error de inicialización
  errorMessage: string = '';

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
    if (this.loginForm.valid) {
      const selectedRole = this.loginForm.get('role')?.value;  // Obtener el rol

      // Redirigir según el rol seleccionado
      switch (selectedRole) {
        case 'Instructor':
          this.router.navigate(['/dashboard-instructor']);
          break;
        case 'Administrador':
          this.router.navigate(['/dashboard-admin']);
          break;
        case 'Super Administrador':
          this.router.navigate(['/dashboard-superadmin']);
          break;
        default:
          console.error('Rol no reconocido');
      }
    } else {
      console.error('Formulario inválido');
    }
  }
}

