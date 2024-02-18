/* Создаём функцию treeArr для получения дерева n-ой вложенности */
export default function treeArr(arr) {
  let currentArr = [];
  for (let elem of arr) {
    if (elem.node !== 0) {
      elem.children = [];
      for (let elem1 of arr) {
        if (elem1.head == elem.id) {
          elem.children.push(elem1);
        }
      }
    }
  }
  currentArr = arr.filter((item) => item.head == null);
  return currentArr;
}
