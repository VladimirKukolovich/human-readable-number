module.exports = function toReadable (number) {
  let arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let arr2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred']
  if (number < 20 ) return arr1[number];
  if (20 < number, number < 100) {
    let b = number.toString()[0];//?
    let c = number.toString()[1];//? 
     if(c === '0')  return `${arr2[b - 2]}`;
    return  `${arr2[b - 2]}` + ` ${arr1[c]}`;
  } 

 if (100 < number < 1000) {
  let a = number.toString()[0];//?
  let b = number.toString()[1];//?
  let c = number.toString()[2];//?
   if(b === '0' && c === '0') 
   return `${arr1[a]}`+ ` ${'hundred'}`;
   if(b === '0')
   return `${arr1[a]}`+ ` ${'hundred'}`  + ` ${arr1[c]}`;
   if(b < 2) return `${arr1[a]}`+ ` ${'hundred'}` + ` ${arr1[1 + c]}`;
   if(c === '0')  
   return `${arr1[a]}`+ ` ${'hundred'}` + ` ${arr2[b - 2]}`;
   return `${arr1[a]}`+ ` ${'hundred'}` + ` ${arr2[b - 2]}` + ` ${arr1[c]}`;
 }
     
}
