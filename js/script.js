'use strict';

const overlay = document.querySelector('.overlay');

const form = overlay.querySelector('.modal__form');

const modalClose = document.querySelector('.modal__close');

const tableBody = document.querySelector('.table__body');

const btnAdd = document.querySelector('.panel__add-goods');

const btnDel = document.querySelector('.table__btn_del');
console.log(btnDel);

const totalPrice = document.querySelector('.cms__total-price');
const totalPriceModal = document.querySelector('.modal__total-price');

const arr = [
  {
    id: 1,
    title: 'Смартфон Xiaomi 11T 8/128GB',
    price: 27000,
    description:
      'Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.',
    category: 'mobile-phone',
    discont: false,
    count: 3,
    units: 'шт',
    images: {
      small: 'img/smrtxiaomi11t-m.jpg',
      big: 'img/smrtxiaomi11t-b.jpg',
    },
  },
  {
    id: 2,
    title: 'Радиоуправляемый автомобиль Cheetan',
    price: 4000,
    description: 'Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет',
    category: 'toys',
    discont: 5,
    count: 1,
    units: 'шт',
    images: {
      small: 'img/cheetancar-m.jpg',
      big: 'img/cheetancar-b.jpg',
    },
  },
  {
    id: 3,
    title: 'ТВ приставка MECOOL KI',
    price: 12400,
    description:
      'Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D',
    category: 'tv-box',
    discont: 15,
    count: 4,
    units: 'шт',
    images: {
      small: 'img/tvboxmecool-m.jpg',
      big: 'img/tvboxmecool-b.jpg',
    },
  },
  {
    id: 4,
    title: 'Витая пара PROConnect 01-0043-3-25',
    price: 22,
    description:
      'Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.',
    category: 'cables',
    discont: false,
    count: 420,
    units: 'v',
    images: {
      small: 'img/lan_proconnect43-3-25.jpg',
      big: 'img/lan_proconnect43-3-25-b.jpg',
    },
  },
];

overlay.classList.remove('active');

const modalControl = (btnAdd, overlay, modalClose) => {
  btnAdd.addEventListener('click', () => {
    overlay.classList.add('active');
  });

  overlay.addEventListener('click', e => {
    const target = e.target;

    if (!target.closest('.overlay__modal') || target.classList.contains('close')) {
      overlay.classList.remove('active');
    }
  });

  modalClose.addEventListener('click', () => {
    overlay.classList.remove('active');
  });
};

const randomId = () => {
  return Math.floor(Math.random() * 100000000000000);
};

const vendorId = () => {
  const vendorCodeId = document.querySelector('.vendor-code__id');
  const id = (vendorCodeId.textContent = randomId());
  return id;
};

const createRow = (obj, index) => {
  return `<tr class="table__input" data-index=${index}>
    <td class="table__cell" type="number">${index + 1}</td>
    <td class="table__cell table__cell_left table__cell_name"  data-id="${obj.id}">
      <span class="table__cell-id" >id: ${vendorId() || randomId()}</span>
      ${obj.title || obj.name}
    </td>
    <td class="table__cell table__cell_left" >${obj.category}</td>
    <td class="table__cell" >${obj.units}</td>
    <td class="table__cell" >${obj.count}</td>
    <td class="table__cell" >$${obj.price}</td>
    <td class="table__cell" >$${obj.count * obj.price}</td>
    <td class="table__cell table__cell_btn-wrapper">
      <button class="table__btn table__btn_pic"></button>
      <button class="table__btn table__btn_edit"></button>
      <button class="table__btn table__btn_del"></button>
    </td>
  </tr>`;
};

const createGoods = arr => {
  return arr.map(createRow);
};

const sumTotalCartPrice = arr => {
  return arr.reduce((acc, cur) => acc + cur.count * cur.price, 0);
};

const renderTotalCartPrice = arr => {
  console.log(arr);
  totalPrice.textContent = `$ ${sumTotalCartPrice(arr)}`;
};

const renderTableBody = data => {
  const trs = createGoods(arr);
  tableBody.innerHTML = '';
  trs.forEach(item => {
    tableBody.insertAdjacentHTML('beforeend', item);
  });
  renderTotalCartPrice(arr);

  // tableBody.append(...trs);
};

const addProductPage = (product, arr) => {
  arr.push({ ...product, count: +product.count, price: +product.price });
  renderTableBody(arr);
  renderTotalCartPrice(arr);
};

const renderModalTotalPrice = (count, price) => {
  if (!count || !price) {
    totalPriceModal.textContent = 0;
  }

  totalPriceModal.textContent = `$ ${count * price}`;
};

const formControl = (form, arr, closeModal) => {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newProduct = Object.fromEntries(formData);
    addProductPage(newProduct, arr);
    overlay.classList.remove('active');
  });

  form.elements.discount.addEventListener('click', () => {
    if (form.elements.discount_count.hasAttribute('disabled')) {
      form.elements.discount_count.removeAttribute('disabled');
    } else {
      form.elements.discount_count.setAttribute('disabled', 'disabled');
    }
  });

  const priceFormElement = form.elements.price;
  const countFormElement = form.elements.count;

  renderModalTotalPrice(+countFormElement.value, +priceFormElement.value);

  priceFormElement.addEventListener('input', () => {
    console.log(countFormElement, priceFormElement);
    renderModalTotalPrice(+countFormElement.value, +priceFormElement.value);
  });
  countFormElement.addEventListener('input', () => {
    renderModalTotalPrice(+countFormElement.value, +priceFormElement.value);
  });
};
const requiredInput = form => {
  const modalInput = form.querySelectorAll('.modal__input');
  return modalInput.forEach(init => init.setAttribute('required', 'required'));
};

const deleteControl = (tableBody, arr) => {
  tableBody.addEventListener('click', event => {
    if (event.target.closest('.table__btn_del')) {
      const tr = event.target.closest('.table__input');
      const index = +tr.dataset.index;
      console.log(arr);
      arr.splice(index, 1);
      renderTableBody(arr);
    }
  });
};

vendorId();

deleteControl(tableBody, arr);

requiredInput(form);

formControl(form, arr);

modalControl(btnAdd, overlay, modalClose);
renderTableBody(arr);
renderTotalCartPrice(arr);
