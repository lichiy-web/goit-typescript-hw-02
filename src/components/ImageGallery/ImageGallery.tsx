import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { ImageGalleryProps } from './ImageGallery.types';

const ImageGallery: React.FC<ImageGalleryProps> = ({ imageList, onImageView }) => {
  return (
    <ul className={css.imageGallery}>
      {imageList.map(imageItem => {
        return (
          <ImageCard
            key={imageItem.id}
            imageItem={imageItem}
            onImageView={onImageView}
          />
        );
      })}
    </ul>
  );
};
export default ImageGallery;
