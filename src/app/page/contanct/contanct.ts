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
            // Corregido minLength para nombre
            nombre: ['', [Validators.required, Validators.minLength(2)]],
            // Corregido minLength para correo
            correo: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
            // Corregido minLength para contacto
            contacto: ['', [Validators.required, Validators.minLength(3)]],
            // Corregido minLength para descripción
            descripcion: ['', [Validators.required, Validators.minLength(10)]]
        });
    }

    onSubmit() {
        // 1. Marcamos todos los campos como "tocados" (touched) si el formulario no es válido.
        // Esto hace que los *ngIf basados en `touched` se evalúen como verdaderos y muestren los mensajes.
        if (this.contactForm.invalid) {
            this.contactForm.markAllAsTouched();
            return; // Detiene la ejecución si el formulario no es válido.
        }

        // Si el formulario es válido, se ejecuta el código de envío (descarga JSON)
        const datos = this.contactForm.value;
        const blob = new Blob([JSON.stringify(datos, null, 2)], { type: 'application/json' });

        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'contacto.json';
        a.click();
        window.URL.revokeObjectURL(url);
        this.contactForm.reset();
    }

    cancelar() {
        this.contactForm.reset();
        // Opcional: Para ocultar mensajes de error después de cancelar, puedes usar:
        // this.contactForm.markAsUntouched();
    }
}