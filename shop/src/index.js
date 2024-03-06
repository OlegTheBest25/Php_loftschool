import createPagination from "./createPagination.js";
import LoadFilter from "./LoadFilter.js";
import LoadDate from "./LoadDate.js";
let search = document.getElementById("submit");
let start = document.getElementById("start");
const ul = document.querySelector(".list-grour");
let params = null;
localStorage.setItem("params", JSON.stringify(params));



/* запускаем фильтрацию данных*/
search.addEventListener("click", (e) => {
  ul.innerHTML = "";
  $(".spinner").show();
 
  e.preventDefault();
  let nameSearch = document.getElementById("filter").value;
  let searchValue = document.getElementById("searchDate").value;

  if (nameSearch == "price") {
    searchValue = Number(searchValue);
  }
  params = {};
  params[nameSearch] = searchValue;
  localStorage.setItem("params", JSON.stringify(params));
 
  /* В функции LoadFilter получаем упорядоченный список идентификаторов товаров,
соответствующих заданным входным параметрам */

  LoadFilter(params)
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
});

start.addEventListener("click", () => {
  localStorage.setItem("params", JSON.stringify(null));
  $(".spinner").show();
  ul.innerHTML = "";
  LoadDate()
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
      LoadDate();
    });
});

/* В функции LoadDate получаем список идентификаторов товаров и вызываем функцию  getItems,
передав в качестве аргумента полученный список
*/
LoadDate()
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
    LoadDate();
  });
