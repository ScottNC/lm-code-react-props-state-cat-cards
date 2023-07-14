export default interface Animal {
  id?: string;
  type?: 'cat' | 'dog'
  name: string,
  species: string,
  favFoods: string[],
  birthYear: number
}
