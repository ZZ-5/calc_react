export const calculations = (value: string, result: string) => {
  let a: string | number = '';
  let b: string | number = '';
  let sign = '';
  const action = ['-', '+', '*', '/'];

  // for (let i = value.length; i >= 0; i--) {
  //   if (action.includes(value[i])) {
  //     if (result === '') {
  //       sign = value[i];
  //       a = value.slice(0, i);
  //       b = value.slice(i + 1);
  //     } else {
  //       sign = value[i];
  //       a = result;
  //       b = value.slice(i + 1);
  //       break;
  //     }
  //   }
  // }

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
    // console.log(a, sign, b);
    if (sign !== '') {
      switch (sign) {
        case '+':
          // console.log(a, sign, b);

          a = +a + +b;
          // console.log(a, sign, b);

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
    console.log((result = a.toString()));
  });

  // switch (sign) {
  //   case '+':
  //     a = +a + +b;
  //     a = a.toString();
  //     result = a;
  //     b = '';
  //     break;
  //   case '-':
  //     a = +a - +b;
  //     a = a.toString();
  //     result = a;
  //     b = '';
  //     break;
  //   case '*':
  //     a = +a * +b;
  //     a = a.toString();
  //     result = a.toString();
  //     b = '';
  //     break;
  //   case '/':
  //     a = +a / +b;
  //     a = a.toString();
  //     result = a;
  //     b = '';
  //     break;

  return result;
};
