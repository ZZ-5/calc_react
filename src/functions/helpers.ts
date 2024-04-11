export const calculations = (value: string) => {
  let a: string | number = '';
  let b: string | number = '';
  let sign = '';
  const action = ['-', '+', '*', '/'];
  let res = '';
  let arr = [];
  let str = '';

  for (let i = 0; i < value.length; i++) {
    if (!action.includes(value[i])) {
      if (i === value.length - 1) {
        str += value[i];
        arr.push(+str);
      } else if (!action.includes(value[i + 1])) {
        str += value[i];
      } else {
        str += value[i];
        arr.push(+str);
        str = '';
      }
    } else {
      arr.push(value[i]);
    }
  }

  arr.map(i => {
    if (a === '' && typeof i === 'number') {
      a = i;
    } else if (typeof i === 'string') {
      sign = i;
    } else if (a !== 0 && b === '') {
      b = i;
    }
    if (sign !== '' && b !== '') {
      switch (sign) {
        case '+':
          a = +a + +b;
          b = '';
          break;
        case '-':
          a = +a - +b;
          b = '';
          break;
        case '*':
          a = +a * +b;
          b = '';
          break;
        case '/':
          a = +a / +b;
          b = '';
          break;
      }
    }
    res = a.toString();
  });

  return res;
};
