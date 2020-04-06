import { ContentRect } from './ContentRect';
declare class ResizeObserverEntry {
    readonly target: Element;
    readonly contentRect: ContentRect;
    constructor(target: Element);
}
export { ResizeObserverEntry };
