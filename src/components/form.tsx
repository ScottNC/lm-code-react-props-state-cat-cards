import { Dispatch, FormEvent, SetStateAction, useRef } from "react";
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

    if (name && species && favFoods && birthYear !==undefined)
      setAnimals(allAnimals => {
        return allAnimals.concat({name, species, favFoods, birthYear, type});
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="type">What animal is the new pet? </label>
        <select ref={typeRef}>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
        </select>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" ref={nameRef} />
      </div>
      <div>
        <label htmlFor="species">Species</label>
        <input type="text" ref={speciesRef} />
      </div>
      <div>
        <label htmlFor="favFoods">Favourite Foods</label>
        <input type="text" ref={favFoodsRef} />
      </div>
      <div>
        <label htmlFor="birthYear">Birth Year</label>
        <input type="text" ref={birthYearRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
