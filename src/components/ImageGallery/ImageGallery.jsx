import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({items}) => {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <ImageCard
                        item={item}
                        smallImg={item.urls.small}
                        regularImg={item.urls.regular}
                        altDesc={item.alt_description}
                    />
                </li>
      ))}
        </ul>
    )
};

export default ImageGallery;