import css from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from './LoadMoreBtn.types';

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore, isLoading }) => {
  return (
    <button type="button" className={css.loadMoreBtn} onClick={onLoadMore}>
      {isLoading ? 'Loading...' : 'Show more'}
    </button>
  );
};
export default LoadMoreBtn;
