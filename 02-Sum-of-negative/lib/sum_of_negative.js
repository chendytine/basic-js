sumOfNegative = (numbers) => {
  // TODO: You are getting a `numbers` array. Return the sum of **negative** numbers only.
  let sum=0;
  for (innum of numbers) {
     if (innum < 0) {
       sum += innum;
     }
   }
  return sum;
}
