type Registry = {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
};

const continentes = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

export default function continentesRepresentados(array: Registry[]): boolean {
  let indexContinentesRepresentados: string[] = []

  array.forEach(v=>{
    if (!indexContinentesRepresentados.includes(v.continent)) indexContinentesRepresentados.push(v.continent)
  })
  return indexContinentesRepresentados.length >= 5
}
