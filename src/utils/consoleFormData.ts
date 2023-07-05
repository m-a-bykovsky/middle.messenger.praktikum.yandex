export function consoleFormData(e: Event): void {
    e.preventDefault();

    const form: HTMLFormElement | null = document.querySelector('form');
    if (!form) return;
    const formData: FormData = new FormData(form);

    console.table(Array.from(formData));
}
