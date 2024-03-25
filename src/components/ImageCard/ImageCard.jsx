const ImageCard = ({item}) => {
    return (
        <div>
            <img src={item.smallImg} alt={item.altDesc} />
        </div>
    )
};

export default ImageCard;