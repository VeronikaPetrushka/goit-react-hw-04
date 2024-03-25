const ImageCard = ({item}) => {
    return (
        <div>
            <img src={item.regularImage} alt={item.altDescription} />
        </div>
    )
};

export default ImageCard;