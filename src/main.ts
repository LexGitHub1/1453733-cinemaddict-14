// Тестовые данные

const getString:MyFunction = (a, b) => {
  return `${a + b}`;
}

interface MyFunction {
  (a:number, b:number):string;
}
