import { useState } from 'react';
import Animal from './data/animal';
import AnimalCard from './components/animal_card';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { animalData } from './data/all-data';
import Form from './components/form';

function App(): JSX.Element {

	const [ animals, setAnimals ] = useState<Array<Animal>>(animalData);

	return (
		<>
			<Navbar />
			<Header
				catCount={animals.filter(animal => animal.type === 'cat').length}
				dogCount={animals.filter(animal => animal.type === 'dog').length}
			/>

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

				<div className='form'>
					<h2 className='header__title'>
						Add a new pet:
					</h2>
					<Form setAnimals={setAnimals}/>
				</div>
				
			</main>

			<Footer />
		</>
	);
}

export default App;
