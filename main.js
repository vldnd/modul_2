'use strict';

const ad = document.querySelector('.ads');
const item = document.querySelectorAll('.item');
const content = document.querySelectorAll('.content');
const propsLists = document.querySelectorAll('.props__list');
const propsItemTwo = document.querySelectorAll('.props__item_two');
const propsItemFour = document.querySelectorAll('.props__item_four');

ad.remove();
item[3].after(item[0]);
propsItemFour[2].after(propsItemFour[5]);
propsItemTwo[7].after(propsItemTwo[8]);
propsItemTwo[8].after(propsItemTwo[9]);

console.log(content);

content[3].append(propsLists[4]);
content[4].append(propsLists[3]);
