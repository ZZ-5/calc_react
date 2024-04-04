export const calculations = (value: string, result: string) => {
  let a: string | number = '';
  let b: string | number = '';
  let sign = '';
  const action = ['-', '+', '*', '/'];

  for (let i = value.length; i >= 0; i--) {
    if (action.includes(value[i])) {
      if (result === '') {
        sign = value[i];
        a = value.slice(0, i);
        b = value.slice(i + 1);
      } else {
        sign = value[i];
        a = result;
        b = value.slice(i + 1);
        break;
      }
    }
  }

  switch (sign) {
    case '+':
      a = +a + +b;
      a = a.toString();
      result = a;
      b = '';
      break;
    case '-':
      a = +a - +b;
      a = a.toString();
      result = a;
      b = '';
      break;
    case '*':
      a = +a * +b;
      a = a.toString();
      result = a;
      b = '';
      break;
    case '/':
      a = +a / +b;
      a = a.toString();
      result = a;
      b = '';
      break;
  }
  return result;
};
