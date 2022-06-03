
class ImageElement extends BaseElement {
    htmlElement: HTMLElement;

    constructor(htmlElement: HTMLElement) {
        super();
        this.htmlElement = htmlElement;
    }

    getPresentation(): any {
    }

    private getImageLink(): string {
        return this.htmlElement.getAttribute('src')
    }

    private getImageBase64Url(): string | undefined{
        const canvas = document.createElement('canvas');
        canvas.width = this.htmlElement.offsetWidth;
        canvas.height = this.htmlElement.offsetHeight;
        const ctx = canvas.getContext('2d')
        if (!ctx) return;
        ctx.drawImage(this.htmlElement as CanvasImageSource, 0, 0)
        return canvas.toDataURL();
    }
}