import css from './ImageCard.module.css'

const ImageCard = ({ smallImg, regularImg, altDesc, openModal }) => {
    return (
        <div className={css.imgContainer} onClick={() => openModal(regularImg)}>

            <img src={smallImg} alt={altDesc} />
        </div>
    )
};

export default ImageCard;