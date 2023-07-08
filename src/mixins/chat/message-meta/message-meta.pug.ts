const template = `
.message__meta
    if (isSelf=='true')
        .message__status
            !=statusIcon
    .message__time=time
`;

export default template;
