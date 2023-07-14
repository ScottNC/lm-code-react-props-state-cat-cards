import { useState } from 'react';
import Animal from './data/animal';
import AnimalCard from './components/animal_card';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { animalData } from './data/all-data';

function App(): JSX.Element {

	const [ animals ] = useState<Array<Animal>>(animalData);

	return (
		<>
			<Navbar />
			<Header count={animals.length}/>

			<main>
				<div className='cards__wrapper'>	{
					animals.map((animal, index) => (
						<AnimalCard
							key={animal.id}
							type={animal.type}
							name={animal.name}
							species={animal.species}
							favFoods={animal.favFoods}
							birthYear={animal.birthYear}
							animalIndex={index}
						/>
				))}
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
