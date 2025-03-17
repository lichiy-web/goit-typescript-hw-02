import { ImageItem } from "../App/App.types";

export type ImageGalleryProps = {
  imageList: ImageItem[],
  onImageView: (imageItem: ImageItem) => void,
}