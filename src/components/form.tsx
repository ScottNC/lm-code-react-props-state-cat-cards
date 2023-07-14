import { Dispatch, FormEvent, SetStateAction, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import Animal from "../data/animal";

interface FormProps {
  setAnimals: Dispatch<SetStateAction<Animal[]>>;
}

function Form({ setAnimals }: FormProps): JSX.Element {

  const typeRef = useRef<HTMLSelectElement | null>(null); 
  const nameRef = useRef<HTMLInputElement | null>(null);
  const speciesRef = useRef<HTMLInputElement | null>(null);
  const favFoodsRef = useRef<HTMLInputElement | null>(null);
  const birthYearRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const type = typeRef.current?.value as ('cat' | 'dog');
    const name = nameRef.current?.value;
    const species = speciesRef.current?.value;
    const favFoods = favFoodsRef.current?.value.split('/[ ,]+/');
    const birthYear = parseInt(birthYearRef.current?.value ?? '');
    const id = uuidv4();

    if (type && name && species && favFoods && birthYear !==undefined)
      setAnimals(allAnimals => {
        return allAnimals.concat({id, name, species, favFoods, birthYear, type});
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="form__text" >What animal is the new pet? </label>
        <select className="form__text form__text--answer form__text--answer--select" ref={typeRef}>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
        </select>
      </div>
      <div>
        <label className="form__text" >Name:</label>
        <input type="text" className="form__text form__text--answer form__text--answer--fill" ref={nameRef} />
      </div>
      <div>
        <label className="form__text" >Species:</label>
        <input type="text" className="form__text form__text--answer form__text--answer--fill" ref={speciesRef} />
      </div>
      <div>
        <label className="form__text" >Favourite Foods:</label>
        <input type="text" className="form__text form__text--answer form__text--answer--fill" ref={favFoodsRef} />
      </div>
      <div>
        <label className="form__text" >Birth Year:</label>
        <input type="text" className="form__text form__text--answer form__text--answer--fill" ref={birthYearRef} />
      </div>
      <button className="form__text form__text--answer form__text--answer--submit" type="submit">Submit</button>
    </form>
  );
}

export default Form;
