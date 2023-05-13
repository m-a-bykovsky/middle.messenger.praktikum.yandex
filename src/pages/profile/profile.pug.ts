const template = `
#main
    #{wrapperElement}.profile
        .profile__summary
            !=avatar
            if (mode=="read")
                h2 #{profileData.firstName}

        .profile__full
            !=profileMain
            if (mode == "write")
                !=profileSecurity
        
        if (mode=="read")
            nav.profile__settings
                a(href="/").extra Изменить данные
                a(href="/").warning Выйти
        else
            .profile__submit
                !=submitButton

    nav.backlink-wrapper
        a(href="/").backlink
            !=backlinkIcon
`;

export default template;
