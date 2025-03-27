console.log("Hello world");
/*TASK J:

Shunday function tuzing, u string qabul qilsin.
Va string ichidagi eng uzun so'zni qaytarsin.

MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

Yuqoridagi text tarkibida 'Uzbekistan'
eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda */

function findLongestWord(str: string): string {
  return str.split(" ").sort((a, b) => b.length - a.length)[0];
}

console.log(findLongestWord("I came from Uzbekistan!"));

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
