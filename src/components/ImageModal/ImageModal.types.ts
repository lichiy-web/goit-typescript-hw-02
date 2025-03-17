import { ImageItem } from "../App.types";

export type ImageModalProps = {
    isOpen: boolean,
    onCloseModal: () => void,
    currentImageItem: ImageItem | null,
}