var bookPhone = {
  FIO :
  {
    surname: "Гаврилов",
    name: "Михаил",
    patronymic: "Владимирович"
  },
  numberPhone: "88888888888"  
};
alert(Object.values(bookPhone.FIO).join(' '));
/*Object.values(bookPhone.FIO) возвращает массив значений объекта FIO: ["Гаврилов", "Михаил", "Владимирович"].
join(' ') объединяет элементы массива в одну строку, разделяя их пробелами.*/
alert(bookPhone.numberPhone);