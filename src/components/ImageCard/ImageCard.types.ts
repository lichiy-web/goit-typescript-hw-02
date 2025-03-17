import { ImageItem } from "../App.types";

export type ImageCardProps = {
  imageItem: ImageItem,
  onImageView: (imageItem: ImageItem) => void;
}