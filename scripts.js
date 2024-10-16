/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (!isString(str)) return null;
  if (str.length === 0) return '';

  const words = split(str);
  let longestWord = words[0];

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

function shortest(str) {
  if (!isString(str)) return null;
  if (str.length === 0) return '';

  const words = split(str);
  let shortestWord = words[0];

  for (let word of words) {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  }
  return shortestWord;
}

function reverse(str) {
  if (!isString(str)) return null;
  return str.split('').reverse().join('');
}

function palindrome(str) {
  if (!isString(str)) return false;
  if (str.length === 0) return false;
  const normalizedStr = str.toLowerCase();
  const reversedStr = reverse(normalizedStr);
  return normalizedStr === reversedStr;
}

function vowels(str) {
  if (!isString(str)) return 0;
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (VOWELS.includes(char)) {
      count++;
    }
  }
  return count;
}

function consonant(str) {
  if (!isString(str)) return 0;
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (CONSONANTS.includes(char)) {
      count++;
    }
  }
  return count;
}



  // Leiðbeint ferli

function start() {
  alert ('Velkominn sláðu inn ')
  
  let input = prompt('Sláðu inn streng');
  if (input === null || input.trim() === '') {
    return; 
  }
 function processString(userInput) {
  const longestWord = longest(userInput);
  const shortestWord = shortest(userInput);
  const reversed = reverse(userInput);
  const numVowels = vowels(userInput);
  const numConsonants = consonant(userInput);
  const isPalindrome = palindrome(userInput);

  let result = `Niðurstöður:\n`;
  result += `Lengsta orðið: ${longestWord}\n`;
  result += `Stystu orðið: ${shortestWord}\n`;
  result += `Snúinn strengur: ${reversed}\n`;
  result += `Fjöldi sérhljóða: ${numVowels}\n`;
  result += `Fjöldi samhljóða: ${numConsonants}\n`;
  result += `Er samhverfur: ${isPalindrome ? 'Já' : 'Nei'}\n`;

  displayResults(result);
}
  const doAgain = confirm('Viltu prófa aftur?');
  if (doAgain) {
    start(); 
  }
}
