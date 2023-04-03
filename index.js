const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials
  .map(tutorial => { // map over each tutorial
    let words = tutorial.split(' ') // split each tutorial into an array of words
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)) // do a map over spec. word in array and uppercase 1st letter
    let response = capitalizedWords.join(' ') // join the array of capitalized words back into a string
    return response // return the string
  })
}
