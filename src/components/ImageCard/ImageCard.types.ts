import { ImageItem } from "../App/App.types";

export type ImageCardProps = {
  imageItem: ImageItem,
  onImageView: (imageItem: ImageItem) => void;
}