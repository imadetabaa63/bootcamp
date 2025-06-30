import './ImageCard.css';

const ImageCard = ({ image }) => (
  <div className="image-card">
    <img src={image.src.medium} alt={image.photographer} />
  </div>
);
export default ImageCard;
