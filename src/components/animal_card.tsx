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

const AnimalCard : React.FC<AnimalCardProps>  = ({name, species, favFoods, birthYear, animalIndex}) => {

  return (
    <div className="card">
        <h3 className="card__text card__header">{name}</h3>
        <p className="card__text">Species: {species}</p>
        <p className="card__text">Favourite Food(s): {favFoods.join(', ')}</p>
        <p className="card__text">Birth Year: {birthYear}</p>
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