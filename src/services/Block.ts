import * as pug from 'pug';
import EventBus from './EventBus';

export type BlockProps = Record<string, any>

export default class Block {
    static EVENTS: Record<string, string> = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_RENDER: 'flow:render',
        FLOW_CDU: 'flow:component-did-update'
    };

    private _element: HTMLElement | null = null;

    private _elementId: string | null = null;

    props: BlockProps;

    eventBus: () => EventBus;

    constructor(props: BlockProps) {
        const eventBus = new EventBus();

        this._elementId = `${Math.trunc(Math.random() * 1000000)}-${Math.trunc(Math.random() * 1000000)}-${Math.trunc(Math.random() * 1000000)}`;

        this.props = this._makePropsProxy({ ...props, _elementId: this._elementId });

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);

        eventBus.emit(Block.EVENTS.INIT);
    }

    private _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    }

    init() {
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    private _componentDidMount(oldProps: BlockProps) {
        this.componentDidMount(oldProps);
    }

    componentDidMount(oldProp?: BlockProps) { }

    dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    private _componentDidUpdate(oldProps: BlockProps, newProps: BlockProps) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (response) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    componentDidUpdate(oldProps: BlockProps, newProps: BlockProps) {
        return oldProps !== newProps;
    }

    setProps = (nextProps: BlockProps) => {
        if (!nextProps) {
            return;
        }
        Object.assign(this.props, nextProps);
    };

    get element() {
        return this._element;
    }

    private _render(): void {
        this._removeEvents();
        const componentFragment: DocumentFragment = this.compile();
        const newElement: HTMLElement = componentFragment.firstElementChild as HTMLElement;

        if (componentFragment.childElementCount > 1) {
            console.warn(`${this.constructor.name}' template with no parent element`);
        }

        this._element?.replaceWith(newElement);
        this._element = newElement;
        this._addEvents();
    }

    private compile(): DocumentFragment {
        // debugger;
        // копирование нового объекта из props для поиска дочерних компонентов
        // (без мутации искомого props)
        const childStubs: Record<string, any> = { ...this.props };

        // поиск дочерних компонентов, замена их на заглушки
        Object.entries(this.props).forEach(([key, value]) => {
            if (value instanceof Block) {
                childStubs[key] = `<div data-element-id='${value.props._elementId}'></div>`;
            }
        });

        // компиляция функции из Pug-шаблона..
        const compileHTML: ({ ...props }) => string = pug.compile(this.render().trim());
        // .. и её вызов для получения html (не рендер, только строка) с заглушками
        const compiledHTML: string = compileHTML(childStubs);

        // создание временного хранилища для html..
        const componentTempFragment = document.createElement('template');
        // .. и запись в него
        componentTempFragment.innerHTML = compiledHTML;

        // замена заглушек внутри фрагмента на компоненты
        // проход по искомому props

        Object.values(this.props).forEach((prop) => {
            if (prop instanceof Block) {
                const childStub: HTMLElement | null = componentTempFragment.content.querySelector(`[data-element-id="${prop._elementId}"]`);
                if (!childStub) return;
                childStub.replaceWith(prop.getContent()!);
            }
        });

        return componentTempFragment.content;
    }

    private _removeEvents(): void {
        const { events = {} } = this.props as BlockProps & { events: Record<string, () => void> };
        const component: Element | null = this.getContent();

        if (typeof Object.keys(events) === 'undefined'
            || (Object.keys(events).length <= 0)) { return; }

        // очистить для избежания утечки памяти (?) при ререндере
        Object.keys(events).forEach((eventName) => {
            component?.removeEventListener(eventName as string, events[eventName], true);
        });
    }

    private _addEvents(): void {
        const { events = {} } = this.props as BlockProps & { events: Record<string, () => void> };
        const component: Element | null = this.getContent();

        if (typeof Object.keys(events) === 'undefined'
            || (Object.keys(events).length <= 0)) { return; }

        Object.keys(events).forEach((eventName) => {
            component?.addEventListener(eventName as string, events[eventName], true);
        });
    }

    render(): string {
        return 'span Never give up. And never forget to declare mixin` template';
    }

    getContent(): HTMLElement | null {
        return this.element;
    }

    private _makePropsProxy(props: BlockProps) {
        const self = this;

        return new Proxy(props, {
            get(target, prop: string) {
                const value = target[prop];

                // eslint-disable-next-line no-nested-ternary
                // return typeof value === 'function' ? value.bind(target)
                // eslint-disable-next-line no-nested-ternary
                return value;
            },

            set(target, prop: string, value) {
                const curValue = target[prop];
                // eslint-disable-next-line no-param-reassign
                target[prop as keyof BlockProps] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, curValue, value);
                return true;
            },

            deleteProperty() {
                throw new Error('Нет доступа');
            }
        });
    }
}
