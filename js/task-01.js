const categories = document.querySelectorAll(".item");
console.log(categories);
console.log(`Number of categories:`, categories.length);

categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItemsCount = category.querySelectorAll("li").length;
  console.log(`Category:`, categoryName);
  console.log(`Elements:`, categoryItemsCount);
});
