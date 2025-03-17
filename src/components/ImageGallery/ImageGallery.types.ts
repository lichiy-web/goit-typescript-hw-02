import { ImageItem } from "../App.types";

export type ImageGalleryProps = {
  imageList: ImageItem[],
  onImageView: (imageItem: ImageItem) => void,
}