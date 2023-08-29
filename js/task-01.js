const categories = document.querySelectorAll(".item");
console.log(categories);
console.log(`кількість категорій: ${categories.length}`);

categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItemsCount = category.querySelectorAll("li").length;
  console.log(`текст заголовка категорії: ${categoryName}`);
  console.log(`кількість елементів в категорії: ${categoryItemsCount}`);
});
