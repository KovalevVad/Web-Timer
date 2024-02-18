export function testTimer(numbers) {
  if (numbers.length > 2) {
    return false
  }

  const reg = new RegExp('^[0-9]+$');
  return reg.test(Number(numbers));
}


export const aormatedTime = (numb) => +numb < 10 ? '0' + +numb : numb
