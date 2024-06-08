function rectanglePerimeter(a, b)
{
  return (a + b) * 2;
}
var width = parseInt(prompt("Введите ширину прямоугольника"));
var length = parseInt(prompt("Введите длину прямоугольника"));
alert(rectanglePerimeter(width, length));