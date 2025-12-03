import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contanct',
  imports: [RouterModule],
  templateUrl: './contanct.html',
  styleUrl: './contanct.css'
})
export class Contanct {

}

// Define una interfaz para un campo para hacerlo más legible
interface FormField {
    id: string;
    errorMessageId: string;
}

// Lista de todos los campos que necesitan validación
const fieldsToValidate: FormField[] = [
    { id: 'fullName', errorMessageId: 'fullName-error' },
    { id: 'email', errorMessageId: 'email-error' },
    { id: 'phone', errorMessageId: 'phone-error' },
    { id: 'description', errorMessageId: 'description-error' },
];

/**
 * Valida un campo de formulario específico.
 * @param field La definición del campo (ID del input y ID del span de error).
 * @returns true si el campo es válido (está lleno), false si está vacío.
 */
function validateField(field: FormField): boolean {
    const inputElement = document.getElementById(field.id) as HTMLInputElement | HTMLTextAreaElement;
    const errorElement = document.getElementById(field.errorMessageId) as HTMLSpanElement;

    // Quita los espacios en blanco de los extremos (trim) para la validación
    if (!inputElement || inputElement.value.trim() === '') {
        // Mostrar el mensaje de advertencia
        if (errorElement) {
            errorElement.textContent = '⚠️ Este campo debe estar lleno.';
        }
        return false;
    } else {
        // Limpiar el mensaje de error si el campo es válido
        if (errorElement) {
            errorElement.textContent = '';
        }
        return true;
    }
}

/**
 * Función principal que maneja el envío del formulario.
 * @param event El evento de envío del formulario.
 */
function handleSubmit(event: Event) {
    // 1. Prevenir el envío por defecto (que recarga la página)
    event.preventDefault();

    let isFormValid = true;

    // 2. Iterar sobre todos los campos y validar.
    // Usamos el operador & para asegurar que todas las validaciones se ejecuten,
    // y si alguna falla, isFormValid se vuelve false.
    for (const field of fieldsToValidate) {
        // isFormValid = isFormValid && validateField(field);
        // Una manera más limpia para asegurar que se ejecuten todas las validaciones:
        if (!validateField(field)) {
            isFormValid = false;
        }
    }

    // 3. Si el formulario es válido, puedes proceder al envío real
    if (isFormValid) {
        alert('¡Formulario enviado con éxito! (Opcional: aquí se enviaría a un servidor)');
        // event.target.submit(); // Descomentar para el envío real
    } else {
        // Opcional: enfocar el primer campo con error
        const firstErrorField = fieldsToValidate.find(field => !validateField(field));
        if (firstErrorField) {
            document.getElementById(firstErrorField.id)?.focus();
        }
    }
}

// 4. Adjuntar el manejador de eventos al formulario
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
});