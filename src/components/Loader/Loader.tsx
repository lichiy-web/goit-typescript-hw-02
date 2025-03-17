import css from './Loader.module.css';
import { RotatingLines } from 'react-loader-spinner';
import { LoaderProps } from './Loader.types';

const Loader: React.FC<LoaderProps> = ({ isLoading, strokeColor }) => {
  return (
    <div className={css.loader}>
      <RotatingLines
        visible={isLoading}
        strokeColor={strokeColor}
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};
export default Loader;
