import { v4 as uuidv4 } from 'uuid';
import { catData, images } from "./cat-data";
import { dogData } from "./dog-data";
import Animal from './animal';

catData.forEach((cat, index) => {
	const id = uuidv4();
	cat.id = id;
  cat.type = 'cat';

  if (images[index])
    images[index].id = id;
});

dogData.forEach((dog) => {
	const id = uuidv4();
  dog.type = 'dog';
	dog.id = id;
});

export const animalData: Animal[] = [...catData, ...dogData];
export { images };

