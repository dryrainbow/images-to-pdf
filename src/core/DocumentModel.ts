import {ImageModel} from "./ImageModel";

export class DocumentModel {
    private images: ImageModel[] = []

    addImage(element: HTMLElement) {
        this.images.push(new ImageModel(element))
    }
    // removeImage() {}
}