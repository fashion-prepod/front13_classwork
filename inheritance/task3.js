// Напишите функцию, которая вычисляет длину линий в
// стандартной двухмерной системе координат.
// Координаты начала и конца линий должны храниться в объектах.
//  Создайте три линии.
//  Вычислите их длины с помощью функции
//  Проверьте, могут ли три линии сформировать треугольник
// Помните:
// Стороны могут сформировать треугольник если длина каждой
//  стороны треугольника должны быть меньше суммы длин остальных сторон.

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const p1 = new Point(4, 6);
const p2 = new Point(75, 23);
const p3 = new Point(62, 2);
const p4 = new Point(1, 8);
const p5 = new Point(78, 3);
const p6 = new Point(67, 1);

class Line {
  constructor(point1, point2) {
    this.point1 = point1;
    this.point2 = point2;
  }

  get length() {
    const katet1 = this.point1.x - this.point2.x;
    const katet2 = this.point1.y - this.point2.y;

    return Math.sqrt(katet1 ** 2 + katet2 ** 2);
  }

  static isTriangleAveliable(l1, l2, l3) {
    const l1Length = l1.length;
    const l2Length = l2.length;
    const l3Length = l3.length;

    return (
      l1Length + l2Length > l3Length &&
      l1Length + l3Length > l2Length &&
      l2Length + l3Length > l1Length
    );
  }
}

const l1 = new Line(p1, p2);
const l2 = new Line(p3, p4);
const l3 = new Line(p5, p6);
