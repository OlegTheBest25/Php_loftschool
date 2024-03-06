import hash from "./hash.js";
const ul = document.querySelector(".list-grour");

/* В функции getItems получаем список товаров со всеми характеристиками
по переданным идентификаторам и отображаем список товаров на экране */

export default async function getItems(x) {
  let response1 = await fetch("https://api.valantis.store:41000/", {
    method: "POST",
    headers: {
      "X-Auth": hash,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      action: "get_items",
      params: { ids: x },
    }),
  });
  let data1 = await response1.json();
  let uniqueID = [];
  ul.innerHTML = "";
  for (let i = 0; i < data1.result.length; i++) {
    if (uniqueID.indexOf(data1.result[i].id) == -1) {
      uniqueID.push(data1.result[i].id);
      let liItem = document.createElement("li");
      let pBrend = document.createElement("p");
      let pPrice = document.createElement("p");
      let pProduct = document.createElement("p");
      let pId = document.createElement("p");
      pPrice.textContent = `Цена: ${data1.result[i].price}`;
      pProduct.textContent = `Название: ${data1.result[i].product}`;
      pId.textContent = `ID: ${data1.result[i].id}`;
      pBrend.textContent = `Бренд: ${data1.result[i].brand}`;
      liItem.append(pBrend, pId, pProduct, pPrice);
      liItem.classList.add("card");
      ul.append(liItem);
    }
  }
  $(".spinner").hide();
  return data1;
}
