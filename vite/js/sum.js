export default function sum(...numbers) {
   let res = 0;
   numbers.forEach((num) => {
    res += num;
   });

   return res;
}

console.log(sum())