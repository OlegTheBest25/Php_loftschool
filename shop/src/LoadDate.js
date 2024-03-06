import hash from "./hash.js";
import getItems from "./getItems.js";
let pages = null;

/* В функции LoadDate получаем список идентификаторов товаров и вызываем функцию  getItems,
передав в качестве аргумента полученный список
*/
export default async function LoadDate(pageNumber = 1) {
  let response1 = await fetch("https://api.valantis.store:41000/", {
    method: "POST",
    headers: {
      "X-Auth": hash,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      action: "get_ids",
    }),
  });
  let data1 = await response1.json();
  let arr1 = new Set(data1.result);
  pages = arr1.size;

  localStorage.setItem("pages", JSON.stringify(pages));
  let start = (pageNumber - 1) * 50;
  let end = pageNumber * 50;

  let currentArr = Array.from(arr1).slice(start, end);
  getItems(currentArr)
    .then()
    .catch((error) => {
      console.log(
        "Упс, что то пошло не так: " +
          error.message +
          "  Код ошибки:" +
          error.name
      );
      getItems(currentArr);
    });

  return data1;
}
