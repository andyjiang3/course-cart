
export const calcCourseNumColor = (courseNum: number): string => {
    if (courseNum < 200) {
      return "#588afc";
    } else if (courseNum < 300) {
      return "#fcaa58"
    } else if (courseNum < 400) {
      return "#60e024"
    } else if (courseNum < 500) {
      return "#fc5858"
    }
  
    return "#588afc";
}