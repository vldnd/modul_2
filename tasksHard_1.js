const selary = +prompt("Укажите размер заработной платы", "15000");

if (selary < 15000) {
  console.log(`Ваш налог составляет ${selary * 0.13}`);
} else if (selary >= 15000 && selary < 50000) {
  console.log(`Ваш налог составляет ${(selary - 15000) * 0.2 + 15000 * 0.13}`);
} else {
  console.log(
    `Ваш налог составляет ${
      (selary - 50000) * 0.3 + 35000 * 0.2 + 15000 * 0.13
    }`
  );
}
