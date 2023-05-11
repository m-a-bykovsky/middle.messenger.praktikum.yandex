/* eslint-disable no-shadow */
enum METHODS {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE',
}

function queryStringify(data: Record<string, any>) {
    const keys = Object.keys(data);
    return keys.reduce(
        (result, key, index) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`,
        '?'
    );
}

type GimmeOptionProps = {
    method?: METHODS,
    headers?: Record<string, string>,
    // eslint-disable-next-line no-undef
    data?: XMLHttpRequestBodyInit & Record<string, string> | null,
    timeout?: number,

}

export class GimmeResponse {
    get = (url: string, options: GimmeOptionProps = {}) => this._request(
        url,
        { ...options, method: METHODS.GET },
        options.timeout
    );

    // PUT, POST, DELETE
    put = (url: string, options: GimmeOptionProps = {}) => this._request(
        url,
        { ...options, method: METHODS.PUT },
        options.timeout
    );

    post = (url: string, options: GimmeOptionProps = {}) => this._request(
        url,
        { ...options, method: METHODS.POST },
        options.timeout
    );

    delete = (url: string, options: GimmeOptionProps = {}) => this._request(
        url,
        { ...options, method: METHODS.DELETE },
        options.timeout
    );

    // options:
    // headers — obj
    // data — obj
    private _request = (url: string, options: GimmeOptionProps = {}, timeout = 5000) => {
        const { headers = {}, method, data } = options;

        return new Promise((resolve, reject) => {
            if (!method) {
                reject(new Error('Empty method'));
                return;
            }

            // создаем экземпляр XHR для работы с запросами
            const xhr = new XMLHttpRequest();
            const isGet = method === METHODS.GET;

            // каким методом пользуемся и куда идем
            xhr.open(
                method,
                isGet && !!data
                    ? `${url}${queryStringify(data)}`
                    : url,
            );

            Object.keys(headers).forEach((key) => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.onload = () => {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;

            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            // посылаем запрос
            if (isGet || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}
