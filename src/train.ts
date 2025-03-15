console.log("Hello world");
/* H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"*/
function getPositive(a: number[]): string {
  return a.filter((number) => number >= 0).join("");
}

console.log(getPositive([0, 5, 10, -8]));
