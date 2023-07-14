import {images} from "../data/all-data";
import CatImage from "./cat_image";

interface AnimalCardProps{
  name: string;
  type?: 'cat' | 'dog';
  species: string;
  favFoods: Array<string>;
  birthYear: number;
  animalIndex: number;
}

const getClass = (type: 'cat' | 'dog' | undefined, initialClass: string) => initialClass + (type ? ` ${initialClass}--${type}` : '');

const AnimalCard : React.FC<AnimalCardProps>  = ({name, species, favFoods, birthYear, animalIndex, type}) => {

  return (
    <div className={getClass(type, "card")}>
        <h3 className={getClass(type, "card__text") + " " + getClass(type, "card__header")}>{name}</h3>
        <p className={getClass(type, "card__text")}>Species: {species}</p>
        <p className={getClass(type, "card__text")}>Favourite Food(s): {favFoods.join(', ')}</p>
        <p className={getClass(type, "card__text")}>Birth Year: {birthYear}</p>
        {animalIndex < images.length && (<CatImage 
          image={images[animalIndex].image}
          altText={images[animalIndex].altText}
          licenceType={images[animalIndex].licenceType}
          licenceUrl={images[animalIndex].licenceUrl}
          attributionName={images[animalIndex].attributionName}
          attributionUrl={images[animalIndex].attributionUrl}
        />)}
    </div>
  );

};

export default AnimalCard;