// const wordSearch = (letters, word) => { 
//   const horizontalJoin = letters.map(ls => ls.join(''));
//   for (let l of horizontalJoin) {
//       if (l.includes(word)) return true;
//   }
//   return false; 
// };


const wordSearch = (letters, word) => { 
  const numRows = letters.length;
  const numCols = letters[0].length;

  // Check horizontally
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  // Check vertically
  for (let col = 0; col < numCols; col++) {
    let verticalString = '';
    for (let row = 0; row < numRows; row++) {
      verticalString += letters[row][col];
    }
    if (verticalString.includes(word)) {
      return true;
    }
  }
  
  return false; 
};





module.exports = wordSearch




// const wordSearch = (letters, word) => { 
//   const horizontalJoin = letters.map(ls => ls.join(''))
//   for (l of horizontalJoin) {
//       if (l.includes(word)) return true
//   }
// }