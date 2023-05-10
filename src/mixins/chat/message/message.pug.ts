const template = `
if (text)    
    .message(data-self=isSelf)=text
        !=meta

if (attachSrc) 
    .message(data-self=isSelf, data-type="attach") 
        img(src=attachSrc, alt=author+'_'+time+'_attachment')
        !=meta
`;

export default template;
