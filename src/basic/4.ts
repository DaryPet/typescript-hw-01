function showMessage(message:string): void{
  console.log(message);
}
showMessage("Hello")

function calc(num1:number, num2:number): number {
    const result = num1 + num2;
    console.log(result)
    return result
}

function customError():never {
  throw new Error('Error');
}
