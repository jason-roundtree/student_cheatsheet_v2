declare class ResizeObservation {
    readonly target: Element;
    readonly broadcastWidth: number;
    readonly broadcastHeight: number;
    constructor(target: Element);
    isActive(): boolean;
}
export { ResizeObservation };
