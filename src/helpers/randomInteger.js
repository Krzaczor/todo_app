export const randomInteger = (max, min = 0) => {
    if (parseInt(max) !== Number(max)) {
      return null;
    }
  
    if (parseInt(min) !== Number(min)) {
      return null;
    }
  
    if (max === min) {
      return max;
    }
  
    return Math.floor(Math.random() * (max - min + 1) + min);
}