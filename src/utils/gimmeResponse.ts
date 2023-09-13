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
    data?: Record<string, any> | null,
    timeout?: number,
}

type HTTPMethod = (url: string, options?: GimmeOptionProps) => Promise<XMLHttpRequest>;

export default class GimmeResponse {
    protected _base: string;

    constructor(base: string) {
        this._base = base;
    }

    get: HTTPMethod = (url, options = {}) => this._request(
        url,
        { ...options, method: METHODS.GET },
        options.timeout
    );

    put: HTTPMethod = (url, options = {}) => this._request(
        url,
        { ...options, method: METHODS.PUT },
        options.timeout
    );

    post: HTTPMethod = (url, options = {}) => this._request(
        url,
        { ...options, method: METHODS.POST },
        options.timeout
    );

    delete: HTTPMethod = (url, options = {}) => this._request(
        url,
        { ...options, method: METHODS.DELETE },
        options.timeout
    );

    private _request = (
        url: string,
        options: GimmeOptionProps = {},
        timeout = 5000
    ): Promise<XMLHttpRequest> => {
        const { headers = {}, method, data } = options;
        // console.log('url', url);
        // console.log('timeout', timeout);
        // console.log('options', options);
        // console.log('headers', headers);
        // console.log('method', method);
        // console.log('data', data);

        const fullURL: string = this._base.concat(url);

        return new Promise<XMLHttpRequest>((resolve, reject) => {
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
                    ? `${fullURL}${queryStringify(data)}`
                    : fullURL,
            );

            xhr.responseType = 'json';
            xhr.withCredentials = true;

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
                xhr.send(data instanceof FormData
                    ? data
                    : JSON.stringify(data));
            }
        });
    };
}
