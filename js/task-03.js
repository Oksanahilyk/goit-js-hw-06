const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector(".gallery");
list.style.listStyleType = "none";
list.style.display = "flex";
list.style.flexWrap = "wrap";
list.style.gap = "30px";
list.style.padding = "0"

const listImg1 = document.createElement("li");
const image1 = document.createElement("img")
image1.src = "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=240";
image1.alt = "White and Black Long Fur Cat";

const listImg2 = document.createElement("li");
const image2 = document.createElement("img");
image2.src = "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=240";
image2.alt = "Orange and White Koi Fish Near Yellow Koi Fish";

const listImg3 = document.createElement("li");
const image3 = document.createElement("img");
image3.src = "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=240";
image3.alt = "Group of Horses Running";

listImg1.append(image1);
listImg2.append(image2);
listImg3.append(image3);
list.append(listImg1, listImg2, listImg3);