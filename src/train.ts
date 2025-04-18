console.log("Hello world");
/* 
TASK S

Shunday function tuzing, u numberlardan tashkil topgan array qabul qilsin
va o'sha numberlar orasidagi tushib qolgan sonni topib uni return qilsin.

MASALAN: missingNumber([3, 0, 1]); return 2

Yuqoridagi misolda, berilayotgan sonlar tarkibini tartiblasak
'2' soni tushib qolgan*/
function missingNumber(arr: number[]): number {
  for (let i = 0; i <= arr.length; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
  return -1;
}

console.log(missingNumber([3, 0, 1]));

/**TASK R

Shunday function yozing, u string parametrga ega bo'lsin.
Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

MASALAN: calculate("1 + 3"); return 4;
1 + 3 = 4, shu sababli 4 natijani qaytarmoqda. */

// function calculate(str: string): number {
//   const [a, , b] = str.split(" ");
//   return Number(a) + Number(b);
// }
// console.log(calculate("5 + 3")); // 8

/**TASK Q:

Shunday function yozing, u 2 ta parametrga ega bo'lib
birinchisi object, ikkinchisi string bo'lsin.
Agar qabul qilinayotgan ikkinchi string, objectning
biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "year"); return false;
Ushbu misolda, ikkinchi argument sifatida berilayotgan 'year' objectning
propertysida mavjud bo'lmaganligi uchun 'false' natijani qaytarmoqda.
 */

// function hasProperty(obj: any, prop: string): boolean {
//   return prop in obj;
// }
// const car = { name: "BMW", model: "M3" };

// console.log(hasProperty(car, "model"));
// console.log(hasProperty(car, "year"));

/**TASK P:

Parametr sifatida yagona object qabul qiladigan function yozing.
Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]] */

// function objectToArray(obj: { [key: string]: any }): [string, any][] {
//   return Object.keys(obj).map((key): [string, any] => [key, obj[key]]);
// }
// console.log(objectToArray({ a: 10, b: 20 }));

/**TASK O:

Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
Qolganlari nested bo'lib yoki type'lari number emas. */

// function calculateSumOfNumbers(arr: any[]): number {
//   let sum = 0;
//   for (let item of arr) {
//     if (typeof item === "number") {
//       sum += item;
//     }
//   }

//   return sum;
// }

// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));

/** function palindromCheck(word: string): boolean {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

// Misollar:
console.log(palindromCheck("dad")); // true
console.log(palindromCheck("son")); // false
*/
// function palindromCheck(word: string): boolean {
//   const reversed = word.split("").reverse().join("");
//   return word === reversed;
// }

// // Misollar:
// console.log(palindromCheck("dad")); // true
// console.log(palindromCheck("son")); // false

/**TASK M:

Shunday function tuzing, u raqamlardan tashkil topgan array qabul qilsin
va array ichidagi har bir raqam uchun raqamning o'zi va hamda o'sha raqamni kvadratidan
tashkil topgan object hosil qilib, hosil bo'lgan objectlarni array ichida qaytarsin

MASALAN: MASALAN: getSquareNumbers([1, 2, 3]) return [{ number: 1, square: 1 }, { number: 2, square: 4 }, { number: 3, square: 9 }]; */
// function getSquareNumbers(
//   array: number[]
// ): { number: number; square: number }[] {
//   return array.map((num) => ({
//     number: num,
//     square: num * num,
//   }));
// }

// console.log(getSquareNumbers([1, 2, 3]));

/** TASK L:

So'zlarni ketma - ketligini buzmasdan har bir so'zni
alohida teskarisiga o'girib beradigan fucntion tuzing.
Funtion yagona string qabul qilsin

MASALAN: reverseSentence("we like coding!") return "ew ekil !gnidoc";
Qaytayotgan natijaga e'tibor bersangiz, so'zlar joyi o'zgarmasdan turgan o'rnida teskarisiga o'girilmoqda*/
// function reverseSentence(str: string): string {
//   return str
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }

// console.log(reverseSentence("we like coding!")); // "ew ekil !gnidoc"

/*


TASK K:



Berilayotgan parametr tarkibida nechta unli harf bor
ekanligini aniqlovchi function tuzing

MASALAN: countVowels("string"); return 1

Yuqoridagi misolda 'string' so'zi tarkibida yagona unli harf 'i'
bo'lganligi uchun '1'ni qaytarmoqda */

// function countVowels(str: string): number {
//   return str.split(/[aeiou]/gi).length - 1;
// }

// console.log(countVowels("string"));
// console.log(countVowels("Aaaaaaaaaa"));

/*TASK J:



Shunday function tuzing, u string qabul qilsin.
Va string ichidagi eng uzun so'zni qaytarsin.

MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

Yuqoridagi text tarkibida 'Uzbekistan'
eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda */

// function findLongestWord(str: string): string {
//   return str.split(" ").sort((a, b) => b.length - a.length)[0];
// }

// console.log(findLongestWord("I came from Uzbekistan!"));

// function majorityElement(arr: number[]): number {
//   let obj: Record<number, number> = {};
//   let maxElem: number = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     let num: number = arr[i];
//     obj[num] = (obj[num] || 0) + 1;
//     if (obj[num] > obj[maxElem]) {
//       maxElem = num;
//     }
//   }

//   return maxElem;
// }

// // Test
// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4])); // Output: 4

/*
Project standarts:
-Logging 
-Naming:
    -function, method,variable (camel)
    -class (paskal)
    -folder (kebab)
    -css (snake)

 -Error handling   

 Traditional API
 Rst API
 GraphQL Api


H2-TASK: 

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"*/

// function getDigits(string: string): string {
//   return string.split("").filter(Number).join("");
// }
// console.log(getDigits("m14i1t"));

/* H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"*/
// function getPositive(a: number[]): string {
//   return a.filter((number) => number >= 0).join("");
// }

// console.log(getPositive([0, 5, 10, -8]));
