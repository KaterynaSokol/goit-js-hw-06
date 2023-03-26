const arrOfCategories = document.querySelectorAll(".item");
const numberOfCategories = arrOfCategories.length;
console.log(`Number of categories: ${numberOfCategories}`);

const categoryElements = arrOfCategories.forEach((item) => {
  const title = item.firstElementChild.textContent;
  const numberOfElements = item.lastElementChild.children.length;
  console.log(`
    Category: ${title}
    Elements: ${numberOfElements}`);
});
