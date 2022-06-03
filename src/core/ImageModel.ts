export class ImageModel {
    private readonly element: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
    }

    get isVisible(): boolean {
        return true;
    }

    getElement() {
        return this.element;
    }
}