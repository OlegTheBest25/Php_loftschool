export default function createElement(elem) {
  const liItem = document.createElement("li");
  if (elem.node == 1) {
    liItem.classList.add("children");
  }
  const spanItem = document.createElement("span");
  spanItem.textContent = `${elem.name}  ${elem.price}`;
  liItem.append(spanItem);
  return liItem;
}
