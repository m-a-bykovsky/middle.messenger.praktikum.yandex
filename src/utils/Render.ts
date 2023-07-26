import Block from '../services/Block';

export default function renderBlock(query: string, block: Block): void {
    const root: HTMLElement | null = document.querySelector(query);

    if (root == null) { throw new Error(`Can't found ${query}`); }

    root.replaceWith(block.getContent() as HTMLElement);
}
