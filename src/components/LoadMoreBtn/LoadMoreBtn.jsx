import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick, hasMorePhotos, isLoading }) => {
  return (
    <button className={css.LoadMoreBtn} onClick={onClick} disabled={!hasMorePhotos || isLoading}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;

