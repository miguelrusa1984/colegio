import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-contanct',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './contanct.html',
    styleUrl: './contanct.css'
})
export class Contanct {

    contactForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.contactForm = this.fb.group({
            nombre: ['', [Validators.required, Validators.minLength(2)]],
            correo: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
            contacto: ['', [Validators.required, Validators.minLength(3)]],
            descripcion: ['', [Validators.required, Validators.minLength(10)]]
        });
    }

    onSubmit() {
        if (this.contactForm.invalid) {
            this.contactForm.markAllAsTouched();
            return;
        }

        if (this.contactForm.valid) {
            const datos = this.contactForm.value;

            // --- Lógica de procesamiento de datos ---
            const blob = new Blob([JSON.stringify(datos, null, 2)], { type: 'application/json' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'contacto.json';
            a.click();
            window.URL.revokeObjectURL(url);
            // ------------------------------------------

            // 1. Resetea los valores a blanco.
            this.contactForm.reset({
                nombre: '',
                correo: '',
                contacto: '',
                descripcion: ''
            });

            // 2. Reinicia los estados de validación
            this.contactForm.markAsUntouched();
            this.contactForm.markAsPristine();
            this.contactForm.updateValueAndValidity(); // Forzar re-validación
        }
    }

    cancelar() {
        this.contactForm.reset({
            nombre: '',
            correo: '',
            contacto: '',
            descripcion: ''
        });
        this.contactForm.markAsUntouched();
        this.contactForm.markAsPristine();
        this.contactForm.updateValueAndValidity();
    }
}