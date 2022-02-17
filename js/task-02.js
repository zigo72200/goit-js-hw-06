const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const creatLI = ingredients.map( item => {
   const list = document.createElement('li');
   list.textContent = item;
   return list;
}
   )
 const linkul =  document.querySelector('#ingredients')
 linkul.append(...creatLI)
  console.log(...creatLI);

