const pointsMath = +prompt("", "Введиет кол-во баллов по математике");
const pointsRus = +prompt("", "Введиет кол-во баллов по русскому");
const pointsInfo = +prompt("", "Введиет кол-во баллов по информатике");

if (pointsMath + pointsRus + pointsInfo >= 265) {
  alert("Поздравляю, вы поступили на бюджет!");
} else {
  alert("Сорри, вы не поступили :(");
}
