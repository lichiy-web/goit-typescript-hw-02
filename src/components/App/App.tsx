import { useState, useEffect} from 'react';
import './App.css';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import SearchBar from '../SearchBar/SearchBar';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { findImages } from '../services/api';
import toast from 'react-hot-toast';
import Notification from '../Notification/Notification';
import ImageModal from '../ImageModal/ImageModal';
import { UnsplashResponse } from '../services/api.types';
import { ImageItem } from './App.types';
import { SearchBarFormElement } from '../SearchBar/SearchBar.types';

const defaultPerPage = 12;
const firstPage = 1;

function App() {
  const [images, setImages] = useState<ImageItem[] | []>([]);
  const [page, setPage] = useState(firstPage);
  const [perPage, setPerPage] = useState(defaultPerPage);
  const [query, setQuery] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageItem, setCurrentImageItem] = useState<ImageItem | null>(null);

  const handleSubmit = (e: React.FormEvent<SearchBarFormElement>) => {
    e.preventDefault();
    console.log('event: ', e);
    console.log('event.currentTarget: ', e.currentTarget);
    const newQuery = e.currentTarget.elements.search.value;
    if (newQuery.trim() === '') {
      toast.error('Search query cannot be empty!', {
        duration: 4000,
      });
      return;
    }
    setPerPage(defaultPerPage);
    setPage(firstPage);
    setIsLoading(false);
    setIsError(false);
    setIsEmpty(false);
    setIsLastPage(false);
    setImages([]);
    setQuery(newQuery);
  };

  const handleLoadMore = () => {
    setIsError(false);
    setPage(prev => prev + 1);
  };

  const handleOpenModal = (newImageItem: ImageItem) => {
    setCurrentImageItem(newImageItem);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setCurrentImageItem(null);
    setModalIsOpen(false);
  };

  useEffect(() => {
    const abortController = new AbortController();
    if (!query) return;
    setIsLoading(true);
    findImages(query, page, perPage, abortController.signal)
      .then(({ data }: UnsplashResponse ) => {
        const { results, total_pages } = data;
        if (page === total_pages) {
          setIsLastPage(true);
        }
        if (!results.length) {
          setIsEmpty(true);
          setPage(firstPage);
          setQuery('');
        }
        setImages((prev) => [...prev, ...results]);
      })
      .catch( (err: Error): void => {
        console.error(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
    return () => abortController.abort();
  }, [query, page, perPage]);

  return (
    <div className="main-container">
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery imageList={images} onImageView={handleOpenModal} />
      <Loader
        isLoading={isLoading}
        strokeColor={page === 0 ? '#000000' : '#eeeeee'}
      />
      {isError && <ErrorMessage />}
      {!!images.length && !isLastPage && (
        <LoadMoreBtn onLoadMore={handleLoadMore} isLoading={isLoading} />
      )}
      {isEmpty && (
        <Notification>
          There are no matches for your search query...
        </Notification>
      )}

      <ImageModal
        isOpen={modalIsOpen}
        onCloseModal={handleCloseModal}
        currentImageItem={currentImageItem}
      />
    </div>
  );
}

export default App;
