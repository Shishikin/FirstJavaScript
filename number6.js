var ageMother = prompt("Возраст матери");
var nameMother = prompt("Имя матери");
var ageFather = prompt("Возраст отца");
var nameFather = prompt("Имя отца");
if (ageMother < ageFather)
  {
    alert(nameFather);
  }
  else
  {
    if(ageMother > ageFather)
      {
        alert(nameMother);
      }
    else
    {
      alert("Ваши родители одинакового возраста");
    }
  }