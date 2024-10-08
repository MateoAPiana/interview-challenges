type Input = {
  nombres: string[];
  edades: number[];
};

type Output = {
  id: number;
  nombre: string;
  edad: number;
};

export default function transformador(input: Input): Output[] {
  const data: Output[] = []
  input.nombres.map((n, i)=>{
    data.push({
      id: i + 1,
      nombre: n,
      edad: input.edades[i]
    })
  })
  return data;
}

console.log(transformador({
  nombres: ["Juan", "Pedro", "María"],
  edades: [23, 45, 18],
}));

