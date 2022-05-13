import { ICourse, TRange } from "./../types";

export function filterCoursesByPrice(
  courses: ICourse[],
  range: TRange
): ICourse[] {
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
