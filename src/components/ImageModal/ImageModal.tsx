// import { useState } from 'react';
import css from './ImageModal.module.css';
import Modal from 'react-modal';
import { IoMdClose } from 'react-icons/io';
import {
  PiHeartDuotone,
  PiUserCircleDuotone,
  PiGlobeDuotone,
} from 'react-icons/pi';
import { ImageModalProps } from './ImageModal.types';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10000,
    backgroundColor: 'rgba(0, 0, 0, .6)',
    padding: 0,
    border: 0,
    borderRadius: 10,
    boxShadow: '0 0 2em #000000',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0, .6)',
  },
};

Modal.setAppElement('#root');

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onCloseModal, currentImageItem }) => {
  if (!isOpen || !currentImageItem) return;
  const { urls, alt_description, description, likes, user, color } =
    currentImageItem;
  const { name, location } = user;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <figure className={css.modalImageViewer}>
        <button type="button" className={css.modalCloseBtn} onClick={onCloseModal}>
          <IoMdClose />
        </button>
        <div className={css.modalImageWrap}>
          <img
            src={urls.full}
            alt={alt_description?.replace(/^\w/, m => m.toUpperCase())}
            className={css.modalImage}
            style={{ border: `2px solid ${color}` }}
          />
        </div>
        <figcaption className={css.modalCaption}>
          <h4 className={css.modalTitle}>
            {description?.replace(/^\w/, m => m.toUpperCase())}
          </h4>
          <div className={css.modalImageInfo}>
            <div className={css.modalImageLikes}>
              <PiHeartDuotone />
              <span>{likes}</span>
            </div>
            <div className={css.modalAuthorName}>
              <PiUserCircleDuotone />
              <span>{name}</span>
            </div>
            {!!location && (
              <div className={css.modalAuthorLocation}>
                <PiGlobeDuotone />
                <span>{location}</span>
              </div>
            )}
          </div>
        </figcaption>
      </figure>
    </Modal>
  );
};
export default ImageModal;
