// Question123: Create a loop that iterates through a string and stop when its find the first vowel.
function printTillVowel( str: string):void{
const vowels = ['a', 'e', 'i', 'o', 'u'];
      
for (let i = 0; i<=str.length; i++) {
   const char = str[i].toLowerCase();
  if (vowels.includes(char)) {
    console.log(`Found the first vowel "${char}" at index ${i}.`);
    break; // Exit the loop when a vowel is found
  }
  console.log(char);
}
}
printTillVowel("SGTREHY");