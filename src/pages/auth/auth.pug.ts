const template = `
main#main
    .auth.modal
        h1.auth__title=title
        !=authForm
        nav
            a(href=additionalLink)=additionalLinkTitle
`;

export default template;
