console.log("Hello world");

/*
Project standarts:
-Logging 
-Naming:
    -function, method,variable (camel)
    -class (paskal)
    -folder (kebab)
    -css (snake)

 -Error handling   






H2-TASK: 

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"*/

function getDigits(string: string): string {
  return string.split("").filter(Number).join("");
}
console.log(getDigits("m14i1t"));

/* H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"*/
// function getPositive(a: number[]): string {
//   return a.filter((number) => number >= 0).join("");
// }

// console.log(getPositive([0, 5, 10, -8]));
