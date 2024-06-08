function choose(message)
{
  return "Ваш выбор " + message + " просто идеален";
}

var food = prompt("Выберите яблоко, апельсин, сок, пиво");

switch (food)
{
  case "яблоко":
    alert(choose(food));
    break;
  case "апельсин":
    alert(choose(food));
    break;
  case "сок":
    alert(choose(food));
    break;
  case "пиво":
    alert(choose(food));
    break;
  default:
    alert("Пошёл прочь!");
}