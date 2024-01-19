const selary = +prompt("Укажите размер заработной платы", "15000");

switch (selary) {
  case selary < 15000:
    console.log(`Ваш налог составляет ${selary * 0.13}`);
    break;
  case selary >= 15000 && selary < 50000:
    console.log(`Ваш налог составляет ${selary * 0.2}`);
    break;
  case selary >= 50000:
    console.log(`Ваш налог составляет ${selary * 0.3}`);
    break;
  default:
    console.log(`Ваш налог составляет ${selary * 0.13}`);
}
