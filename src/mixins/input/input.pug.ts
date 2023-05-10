const template = `
div.input-field(class=theme)
    case theme
        when ("input-field_theme-primary")
            input(placeholder=title, 
                id=name, 
                name=name, 
                type=type,
                required=isRequired, 
                disabled=isDisabled, 
            )
        default            
            label(for=name)=title
            input(id=name, 
                name=name, 
                type=type, 
                value=value
                required=isRequired, 
                disabled=isDisabled, 
            )
`;

export default template;
