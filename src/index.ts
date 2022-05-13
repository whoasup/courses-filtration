import "./styles.css";
import { ICourse, TRange } from "./types";

let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] }
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];
let requiredRange4 = [null, null];

function filterCourses(courses: ICourse[], range: TRange): ICourse[] {
  const [min, max]: TRange = range;

  return courses.filter((course: ICourse): boolean => {
    const [courseMin, courseMax]: TRange = course.prices;

    const isMatchesMin =
      min === null
        ? true
        : courseMin === null
        ? true
        : courseMax === null
        ? true
        : courseMax >= min;

    const isMatchesMax =
      max === null ? true : courseMin === null ? true : courseMin <= max;

    return isMatchesMin && isMatchesMax;
  });
}

console.log(filterCourses(courses, requiredRange1));
console.log(filterCourses(courses, requiredRange2));
console.log(filterCourses(courses, requiredRange3));
console.log(filterCourses(courses, requiredRange4));
