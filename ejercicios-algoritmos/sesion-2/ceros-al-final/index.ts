export default function moverCeros(array: unknown[]): unknown[] {
  let res: unknown[] = structuredClone(array)
  let indexZeros: number[] = []
  res.forEach((v, i)=>{
    if (v === 0) {
      indexZeros.push(i)
      res.push(0)
    }
  })
  res = res.filter((v, i)=> !indexZeros.includes(i))
  return res;
}