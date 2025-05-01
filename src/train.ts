console.log("Hello world");
/** */ /** */
/**TASK W

Shunday function yozing, u o'ziga parametr sifatida
yagona array va number qabul qilsin. Siz tuzgan function
arrayni numberda berilgan uzunlikda kesib bo'laklarga
ajratgan holatida qaytarsin.
MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga
asoslanib 3 bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti; */
function chunkArray<T>(array: T[], size: number): T[][] {
  let result: T[][] = [];
  let i: number = 0;

  while (i < array.length) {
    let chunk: T[] = array.slice(i, i + size);
    result.push(chunk);
    i += size;
  }

  return result;
}
const result = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result);

/** TASK V

Shunday function yozing, uni string parametri bo'lsin.
Va bu function stringdagi har bir harfni o'zi bilan
necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.
  
MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

Yuqoridagi misolda, 'hello' so'zi tarkibida
qatnashgan harflar necha marotaba takrorlangini bilan
object sifatida qaytarilmoqda.*/
// function countChars(str: string): Record<string, number> {
//   let result: Record<string, number> = {};

//   str.split("").map((char) => {
//     if (result[char]) {
//       result[char] += 1;
//     } else {
//       result[char] = 1;
//     }
//   });

//   return result;
// }

// console.log(countChars("hello"));

/**TASK U

Shunday function tuzing, uni number parametri bo'lsin.
Va bu function berilgan parametrgacha, 0'dan boshlab
oraliqda nechta toq sonlar borligini aniqlab return  qilsi.

MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda.
Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud. 
Keyingi namunada ham xuddi shunday xolat takrorlanmoqda. */
// function sumOdds(number: number): number {
//   let count = 0;
//   for (let i = 0; i < number; i++) {
//     if (i % 2 !== 0) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(sumOdds(9));
// console.log(sumOdds(11));
/**TASK T

Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.*/

// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   return arr1.concat(arr2).sort((a, b) => a - b);
// }
// const result = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// console.log(result); // [0, 3, 4, 4, 6, 30, 31]

/* 
TASK S

Shunday function tuzing, u numberlardan tashkil topgan array qabul qilsin
va o'sha numberlar orasidagi tushib qolgan sonni topib uni return qilsin.

MASALAN: missingNumber([3, 0, 1]); return 2

Yuqoridagi misolda, berilayotgan sonlar tarkibini tartiblasak
'2' soni tushib qolgan*/
// function missingNumber(arr: number[]): number {
//   for (let i = 0; i <= arr.length; i++) {
//     if (!arr.includes(i)) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(missingNumber([3, 0, 1]));

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
