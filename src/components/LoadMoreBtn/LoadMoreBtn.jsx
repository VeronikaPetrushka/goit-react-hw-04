import { useState } from 'react';
import Loader from '../Loader/Loader';
import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onClick, hasMorePhotos, loading }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await onClick();
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading || loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Loader />
        </div>
      ) : (
          hasMorePhotos && (
            <button className={css.LoadMoreBtn} onClick={handleClick} style={{ marginTop: '20px' }} disabled={!hasMorePhotos || isLoading || loading}>
              Load more
            </button>
          )
      )}
    </div>
  );
};

export default LoadMoreBtn;
