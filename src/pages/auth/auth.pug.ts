const template = `
block main
    .auth.modal
        h1.auth__title=title
        form.auth__form
            !=authForm
            !=submitButton
        nav
            a(href=additionalLink)=additionalLinkTitle
`;

export default template;
