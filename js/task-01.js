const itemElement = document.querySelector ('#categories');
const itemElementChild = itemElement.children.length;
console.log (`Number of categories: ${itemElementChild}`);

const Li = document.querySelectorAll('.item');
// console.log(itemLi);
Li.forEach(elem => {
		const category = elem.firstElementChild.textContent;   
	    const quantityElem = elem.lastElementChild.children.length;
	    console.log(`Category: ${category}
Elements: ${quantityElem}`);
	});
