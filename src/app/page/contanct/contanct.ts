import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
            nombre: ['', Validators.required],
            correo: ['', [Validators.required, Validators.email]],
            contacto: ['', Validators.required],
            descripcion: ['', Validators.required]
        });
    }

    // ¡FUNCIONES MOVIDAS DENTRO DE LA CLASE!
    onSubmit() {
        if (this.contactForm.valid) {
            const datos = this.contactForm.value;
            const blob = new Blob([JSON.stringify(datos, null, 2)], { type: 'application/json' });

            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'contact_data.json';
            a.click();
            window.URL.revokeObjectURL(url);
            this.contactForm.reset();
        }
    }

    cancelar() {
        this.contactForm.reset();
    }
}