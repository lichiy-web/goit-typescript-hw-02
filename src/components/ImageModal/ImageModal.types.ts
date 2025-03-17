import { ImageItem } from "../App/App.types";

export type ImageModalProps = {
    isOpen: boolean,
    onCloseModal: () => void,
    currentImageItem: ImageItem | null,
}