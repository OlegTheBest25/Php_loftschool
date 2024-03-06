import hash from "./hash.js";
import getItems from "./getItems.js";

const ul = document.querySelector(".list-grour");
let pageNumber = 1;
let pages = null;

/* В функции LoadFilter получаем упорядоченный список идентификаторов товаров,
соответствующих заданным входным параметрам */

export default async function LoadFilter(params, pageNumber = 1) {
  let response1 = await fetch("https://api.valantis.store:41000/", {
    method: "POST",
    headers: {
      "X-Auth": hash,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      action: "filter",
      params: params,
    }),
  });
  let data1 = await response1.json();
  let arr1 = new Set(data1.result);
  pages = arr1.size;
  console.log(`Количество записей после фильтрации: ${pages}`);
  localStorage.setItem("pages", JSON.stringify(pages));
  let start = (pageNumber - 1) * 50;
  let end = pageNumber * 50;

  let currentArr = Array.from(arr1).slice(start, end);
  getItems(currentArr).catch((error) => {
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
