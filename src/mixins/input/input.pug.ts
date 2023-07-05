const template = `
div.input-field(class=theme)
    if (theme!=="input-field_theme-primary")
        label(for=name)=title
    if errMsg
        p #{errMsg}
    input(placeholder=(theme!=="input-field_theme-primary")?'':title,
        id=name, 
        name=name, 
        type=type,
        value=value,
        required=isRequired, 
        disabled=isDisabled,
        data-validation-type=validationType,
    )
`;

export default template;
