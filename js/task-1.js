const listWithId = document.querySelector('#categories');
const listWithIdChildren = listWithId.children;
console.log(`Number of categories: ${listWithIdChildren.length}`);
const categories = document.querySelectorAll('#categories .item');

categories.forEach(categor => {
  const titles = categor.querySelector('h2').textContent;
  const listLenght = categor.querySelectorAll('li').length;
  console.log(`Category: ${titles}`);
  console.log(`Elements: ${listLenght}`);
});
