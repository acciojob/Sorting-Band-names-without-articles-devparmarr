//your code here

// script.js
let bandNames = ['The Rolling Stones', 'Aerosmith', 'The Beatles', 'Pink Floyd', 'Led Zeppelin', 'Nirvana'];

function removeArticle(name) {
  // Split the band name into words
  const words = name.split(' ');

  // Check if the first word is an article ('a', 'an', or 'the'), and remove it if it is
  if (['a', 'an', 'the'].includes(words[0].toLowerCase())) {
    words.shift();
  }

  // Join the words back together to form the modified band name
  return words.join(' ');
}

// Sort the band names without articles in lexicographic order
bandNames.sort((a, b) => removeArticle(a).localeCompare(removeArticle(b)));

// Get the <ul> element to display the sorted band names
const bandList = document.getElementById('band');

// Clear any existing content
bandList.innerHTML = '';

// Add the sorted band names to the list
bandNames.forEach((name) => {
  const listItem = document.createElement('li');
  listItem.textContent = name;
  bandList.appendChild(listItem);
});
