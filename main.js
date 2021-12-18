const filterBox = document.querySelectorAll(".box");
// console.log('filterBox', filterBox)

document.querySelector(".test").addEventListener("click", (event) => {
  if (event.target.tagName !== "LI") return false;

  let filterClass = event.target.dataset["f"];
  console.log("filterClass", filterClass);

  filterBox.forEach((elem) => {
    elem.classList.remove("hide");
    if (!elem.classList.contains(filterClass) && filterClass !== "all") {
      elem.classList.add("hide");
    }
  });
});
