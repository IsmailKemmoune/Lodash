const _ = {
  clamp(current, lowerBound, upperBound) {
    if (current > upperBound) return Math.min(current, upperBound);
    else if (current < lowerBound) return Math.max(current, lowerBound);
    else return current;
  },
  inRange(number, startValue, endValue) {
    endValue = endValue || 0;
    startValue > endValue
      ? ([startValue, endValue] = [endValue, startValue])
      : undefined;
    return number >= startValue && number < endValue ? true : false;
  },
  words(string) {
    return string.split(" ");
  },
  pad(string, length) {
    let pad = 0;
    length > string.length ? (pad = length - string.length) : string;
    if (pad % 2 === 0) {
      const padLength = string.length + pad / 2;
      const rightPadded = string.padStart(padLength, " ");
      const paddedString = rightPadded.padEnd(padLength + pad / 2, " ");
      return paddedString;
    } else {
      const padLeft = string.length + Math.floor(pad / 2);
      const padRight = string.length + Math.ceil(pad / 2);
      const rightPadded = string.padStart(padLeft, " ");
      const paddedString = rightPadded.padEnd(
        padRight + Math.floor(pad / 2),
        " "
      );
      return paddedString;
    }
  },
  has(object, key) {
    const keys = Object.keys(object);
    return keys.includes(key);
  },
  invert(object) {
    const objectArr = Object.entries(object);
    const reversedKeyValue = objectArr.map((prop) => {
      return prop.reverse();
    });
    return Object.fromEntries(reversedKeyValue);
  },
  findKey(object, predicate) {
    for (key in object) {
      if (predicate(object[key])) return key;
    }
    return undefined;
  },
  drop(array, dropNumber) {
    arrayCopy = [...array];
    if (!dropNumber) {
      arrayCopy.shift();
      return arrayCopy;
    } else return array.slice(dropNumber);
  },
  dropWhile(array, predicate) {
    const fun = (item, index) => !predicate(item, index, array);
    let sliceNumber = array.indexOf(fun);
    console.log(sliceNumber);
    return array.slice(sliceNumber);
  },
  chunk(array, size) {
    size = size || 1;
    let chunk = [];
    const resultArr = [];
    for (let i = 0; i < array.length; i += size) {
      let count = size;
      let j = i;
      while (count--) {
        if (array[j]) chunk.push(array[j++]);
      }
      resultArr.push(chunk);
      chunk = [];
    }
    return resultArr;
  },
};
