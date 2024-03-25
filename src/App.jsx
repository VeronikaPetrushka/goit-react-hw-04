import './App.css';
import { useState } from 'react';
// import { useMemo } from "react";
import fetchPhotosWithTopic from "./api.js";
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import SearchForm from './components/SearchBar/SearchBar.jsx';

// Access KEY ws2fGeHWZ0yz62KUutYPYWk-1LZA4NnyUNmtmak3VgI

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

	const handleSearch = async (topic) => {
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const data = await fetchPhotosWithTopic(topic);
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {loading && <p style={{ fontSize: 20 }}>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {images.length > 0 && <ImageGallery items={images} />}
    </div>
  );
};



export default App;