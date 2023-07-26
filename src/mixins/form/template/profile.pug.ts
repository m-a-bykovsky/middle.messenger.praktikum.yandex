export const template = `
.profile__full    
    .profile__fields
        !=email
        !=login
        !=firstName
        !=secondName
        !=displayName
        !=phone
        if (mode == "write")
            !=oldPassword
            !=newPassword
            !=repeatNewPassword
    if (mode == "read")
        nav.profile__settings
            a(href="/settings").extra Изменить данные
            a(href="/").warning Выйти
    else
        .profile__submit
            !=submitButton
`;
