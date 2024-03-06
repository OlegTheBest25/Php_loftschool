import LoadDate from "./LoadDate.js";
import LoadFilter from "./LoadFilter.js";
const ul = document.querySelector(".list-grour");
const ulPagination = document.querySelector(".pagination");
let pages = null;
let pageNumber;
let params;



export default async function createPagination() {
  params =  JSON.parse(localStorage.getItem("params"));
console.log(params)
if (params) {
  console.log('Параметры переданы');
}
  ulPagination.innerHTML = ""; 
  pages = JSON.parse(localStorage.getItem("pages"));
  console.log(Math.trunc(pages / 50));
  for (let i = 0; i < Math.ceil(pages / 50); i++) {
    const itemPagination = document.createElement("li");
    itemPagination.classList.add("page-item");
    if (i == 0){
      itemPagination.classList.add("active");
    }
    const linkPagination = document.createElement("a");
    linkPagination.classList.add("page-link");
    linkPagination.setAttribute("href", "#");
    linkPagination.textContent = `${i + 1}`;
    itemPagination.append(linkPagination);
    ulPagination.append(itemPagination);
  }

  let pageLink = document.querySelectorAll("a.page-link");
  for (let i = 0; i < pageLink.length; i++) {
    pageLink[i].addEventListener("click", function (e) {
      let active = document.getElementsByClassName('active');
      active[0].classList.remove('active');
      ul.innerHTML = "";
      $(".spinner").show();
      pageNumber = e.target.textContent;
      localStorage.setItem("pages", JSON.stringify(pages));
      pageLink[i].parentNode.classList.add('active');
      if (params) {
        LoadFilter(params, pageNumber)
        .then(() => {
          createPagination();
        })
        .catch((error) => {
          console.log(
            "Упс, что то пошло не так: " +
              error.message +
              "  Код ошибки:" +
              error.name
          );
          LoadFilter();
        });
        console.log('Параметры переданы');
      } else {
        LoadDate(pageNumber).catch((error) => {
        console.log(
          "Упс, что то пошло не так: " +
            error.message +
            "  Код ошибки:" +
            error.name
        );
        LoadDate();
      });}
      
      localStorage.setItem("pageNumber", JSON.stringify(pageNumber));
    });
  }
}
