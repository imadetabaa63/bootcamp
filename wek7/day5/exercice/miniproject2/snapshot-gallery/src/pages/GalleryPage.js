import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchImages } from '../api/pexels';
import ImageCard from '../components/ImageCard';

const GalleryPage = ({ query }) => {
  const { query: routeQuery } = useParams();
  const [images, setImages] = useState([]);
  const finalQuery = query || routeQuery || 'Nature';

  useEffect(() => {
    fetchImages(finalQuery).then(setImages);
  }, [finalQuery]);

  return (
    <div className="gallery">
      {images.map(img => (
        <ImageCard key={img.id} image={img} />
      ))}
    </div>
  );
};

export default GalleryPage;
