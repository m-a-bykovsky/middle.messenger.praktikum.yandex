export function consoleFormData(e: Event): void {
    e.preventDefault();
    e.stopPropagation();

    const form: HTMLFormElement | null = document.querySelector('form');
    if (!form) return;
    // eslint-disable-next-line no-undef
    const formData: [string, FormDataEntryValue][] = Array.from(new FormData(form));

    console.table(formData);
}
