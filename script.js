"use strict";

// {
//   const item = "Молоко";
//   const count = 5;
//   const category = "Молочные изделия";
//   const price = 60;

//   console.log(item);
//   console.log(`общая сумма товара: ${count * price}`);
// }

// {
//   const item = "Мандаринки";
//   const count = 20;
//   const category = "Фрукты";
//   const price = 10;

//   console.log(item);
//   console.log(`общая сумма товара: ${count * price}`);
// }

{
  const item = prompt("Укажите продукт", "");
  console.log(item);
  const count = prompt("Укажите количество продукта", "");
  console.log(count);
  const category = prompt("Укажите категорию продукта", "");
  console.log(category);
  const price = prompt("Укажите цену продукта", "");
  console.log(price);

  console.log(
    `"На складе ${count} единицы товара "${item}" на сумму ${
      count * price
    } деревянных"`
  );
}
