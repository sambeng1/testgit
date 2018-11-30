 // Here's the function for generating an array of words from a string (minus punctuation and numbers).

function generateWordArray(wordString){
  let string = wordString.toLowerCase();
  let finalWordArray = [];
  let curWord = '';
  let skipArray = ['!','?','.',',',"'",'"','1','2','3','4','5','6','7','8','9'];

  for (let i = 0; i < string.length; i++){
    let curChar = string[i];
    if (skipArray.includes(curChar)){
      continue;
    }
    if (curChar !== ' '){
    curWord += curChar;
    }
    if (curChar === ' '){
      finalWordArray.push(curWord);
      curWord = '';
    }
    if (i === string.length-1){
      finalWordArray.push(curWord);
      curWord = '';
    }
  }
  return(finalWordArray);
}


// Here's the function for taking the previously created finalWordArray, and generating an object containing unique words, and words that come after that word.

function generateWordPairs(array){
  let wordPairs = {};
  for (let i = 0; i < array.length-1; i++){
    let curWord = array[i];

        if (curWord in wordPairs === true){
      wordPairs[curWord].push(array[i+1]);
    }
    if (curWord in wordPairs === false){
    wordPairs[curWord] = Array(array[i+1]);
    }
  }
  return wordPairs;
}

//This function grabs a random key for the next function to make the beginning of the "Poetry Line" with.

function randomProp(obj){
  let keys = Object.keys(obj);
  return [keys[keys.length*Math.random() << 0]];
}

// Write Line fuction writes 1 line of "poetry"

function writeLine(obj,n){
let poetryLine = [];
let curKeys = Object.keys(obj);
let ranKey = randomProp(obj);
poetryLine.push(ranKey[ranKey.length*Math.random() << 0]);

 for (let i = 0; i < n; i++){
   // Looks at whatever the previous Poetry Line is.
   let preWord = poetryLine[poetryLine.length-1];
   // If the word doesn't have related words, this if statement chooses a new word for the next statement to use.
   if (!curKeys.includes(preWord)){
     preWord = curKeys[curKeys.length*Math.random()<<0]
   }
   // Pushes random related word
   let curWord = obj[preWord][obj[preWord].length*Math.random()<<0];
   poetryLine.push(curWord);

 }
return poetryLine.join(' ');
}

function generatePoem(wordCorpus, numLines){
  let poem = '';
  let wordCorpusArray = generateWordPairs(generateWordArray(wordCorpus));
  for (let i = 0; i < numLines; i++){
    let ranNum = (Math.random()* (8-3) + 3)
    poem += writeLine(wordCorpusArray,ranNum) + '\n';
  }
  console.log(poem);
  return poem;
}
// Insert an array of text from a poem or song, along with a number indicating how many lines you want the new poem to be. 
// It'll output a new version of the song/poem using Markov's Chain.

generatePoem('Ever since I left the city, you, you, you You and me we just dont get along', 5);