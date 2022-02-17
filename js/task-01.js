const linkCategories = document.querySelector("#categories")
console.log(linkCategories);
const linkItem = [...linkCategories.querySelectorAll('.item')]
console.log(linkItem);


console.log(`Number of categories: ${linkItem.length}`);

linkItem.map( item => {
   const text =  item.querySelector('h2').textContent
   const length = item.querySelectorAll('li').length
    console.log(`Category: ${text}`);
    console.log(`Elements: ${length}`);
})
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5