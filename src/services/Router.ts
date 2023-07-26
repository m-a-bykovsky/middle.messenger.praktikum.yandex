import Block, { BlockProps } from './Block';
import Route from './Route';

export default class Router {
    // eslint-disable-next-line no-use-before-define
    static _instance: Router;

    private _rootQuery: string | null = null;

    private routes: Route[] = [];

    private _currentRoute: Route | null = null;

    private history: History = window.history;

    constructor(rootQuery: string) {
        // singleton pattern
        if (Router._instance) {
            // eslint-disable-next-line no-constructor-return
            return Router._instance;
        }

        this._rootQuery = rootQuery;
        Router._instance = this;
    }

    use(pathname: string, block: typeof Block, props?: BlockProps) {
        const route = new Route(pathname, block, { ...props, rootQuery: this._rootQuery });
        this.routes.push(route);
        return this;
    }

    start = (): void => {
        window.onpopstate = (event: PopStateEvent) => {
            this._onRoute((<Window>event.currentTarget).location.pathname);
        };

        this._onRoute(window.location.pathname);
    };

    private _onRoute(pathname: string) {
        const route = this._getRoute(pathname);

        if (route == null) { throw new Error(`Can't found ${pathname}`); }

        if (this._currentRoute) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;
        route.render();
    }

    go(pathname: string) {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }

    back() {
        this.history.back();
    }

    forward() {
        this.history.forward();
    }

    private _getRoute(pathname: string) {
        return this.routes.find((route) => route.match(pathname));
    }
}
