// logGreeting() adında funksiya tərtib edin hansıki konsola «[Adınız] is a JS developer» mesajı çıxar
// function logGreeting(){
//     const name = prompt("please enter your name ")
//     console.log(`${name} is a JS developer` )
// }
// logGreeting();\

// İstifadəçi adını parametr kimi qəbul edən və konsola «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.
// Funksiyanı 3 müxtəlif ad üçün çağırın.
// let name = 0;
// for (let i = 0; i < 3; i++) { // Changed the loop conditions to loop 3 times
//     if (i <= 3) { // This condition is redundant, as 'i' will always be less than 3 in this loop
//         logGreeting(); // Calling the function without passing 'name' as a parameter
//     }
// }
// function logGreeting() {
//     const name = prompt("Enter your name");
//     console.log(`${name} is active now`);
// // }
// // Parametr olaraq üç ədəd qəbul edən və konsolda ən böyüyünü göstərən bir funksiya tərtib edin.
// let threeNum = []; // Initialize an array to store the three numbers
// for (let i = 0; i < 3; i++) {
//     const num = parseFloat(prompt('Enter number')); // Convert input to a number
//     threeNum.push(num); // Add the number to the array
// }
// function maxNum(numbers) {
//     const max = Math.max(...numbers);
//     console.log(max);
// }
// maxNum(threeNum); // Call the function with the array of numbers
// let threeNum =[];
// for(let i =0;i<3;i++){
//     threeNum=prompt('enter number');// for just 0-9
// }
// function maxNum(threeNum){
//   const max =Math.max(...threeNum);
//   console.log(max)
// }
// maxNum(threeNum);

// Rubl və dollarla hesab qəbul edən və bütün hesablardakı məbləğin cəmin rublla göstərən funksiya yazın.
// const dollar = 95;
// const rubl = parseFloat(prompt("Please enter your Ruble count"));

// function convertor(rubles, exchangeRate) {
//     const result = rubles / exchangeRate;
//     console.log(result);
// }

// convertor(rubl, dollar);

// Klaviaturadan 1-dən 99-da daxil olmaqla daxil edilmiş ədədi mətnlə ​​yazan funksiya tərtib edin.
// İstifadəçidən 1 ilə 99 arasında rəqəm daxil etməsini tələb edən və onu mətn şəklində konsola çıxaran numberToText funksiyası tərtib edin.

// function enterNum() {
//   const numb = Number(prompt("Please enter from 1 to 99 numbers"));
//   if (numb < 1 || numb > 99 || isNaN(numb)) {
//     alert(`You entered ${numb}.Please again Enter`);
//     return;
//   }

//   const ones = [
//     "bir",
//     "iki",
//     "uc",
//     "dord",
//     "bes",
//     "alti",
//     "yeddi",
//     "sekkiz",
//     "doqquz",
//   ];
//   const tens = [
//     "on",
//     "iyirmi",
//     "otuz",
//     "qirx",
//     "elli",
//     "altmis",
//     "yetmis",
//     "seksen",
//     "doxsan",
//   ];

//   if (numb < 10) {
//     console.log(ones[numb]);
//   } else if (numb % 10 === 0) {
//     console.log(tens[numb / 10]);
//   } else {
//     console.log(`${tens[Math.floor(numb / 10 - 1)]} ${ones[Math.floor(numb % 10 - 1)]}`);
//   }
// }
// enterNum();
// function findNum(){
//     const number = +prompt("Enter number from1 to 99")
//     if(isNaN(number ) || number <1 || number>99){
//         alert(`Please enter correct number . ${number} is a not number`)
//         return ;
//     }

// const ones =['bir', 'iki', 'üç', 'dört', 'beş', 'altı', 'yedi', 'sekiz', 'dokuz'];
// const tens =['on', 'yirmi', 'otuz', 'kırk', 'elli', 'altmış', 'yetmiş', 'seksen', 'doksan']
//     if(number <10){
//        console.log(ones[number])
//     }
//     else if(number %10 ===0){
//         console.log(tens[number /10] -1)
//     }
//     else{
//         console.log(tens[Math.floor(number /10)-1 ] + " " +ones[number % 10 -1] )
//     }
// }
// findNum();

//İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin.
// Bu rəqəmi üçrəqəmli olana qədər 7 - ədədə qədər artırın.
// Son dəyəri konsola çıxarın.

// function add (){

// const numb = +prompt("Enter any number")

// while(isNaN(numb) || numb>101 ){
//     alert("Please enter just from 1 to 99 ")
// } do(numb){
//     let sum
// }
// }
// add()

//setTimeOut
// const paragraphs = document.querySelectorAll("#sa"); // veya uygun bir CSS sınıfı veya ID'si
// const names = ["Metin", "Abbas", "Elyas", "Umut"];
// let i = 0;

// function changeName() {
//   setInterval(() => {
//     paragraphs.forEach((p) => {
//       p.innerText = names[i];
//     });
//     i = (i + 1) % names.length;
//   }, 2000);
// }

// changeName();

//setInterval 

//Use dom for catching p elemtn in html 
// const pharagraph=document.querySelector("#sa")

// pharagraph.addEventListener(function salam(){
//     setInterval(() => {
//         pharagraph.array.forEach(element => {
            
//         });


//     }, interval);
// })

// salam()
// const paragraph = document.querySelector("#sa");

// function getRandomNumber() {
//     return Math.floor(Math.random() * 100); // 0 ile 99 arasında rastgele bir sayı üretir
// }

// function updateParagraph() {
//     paragraph.textContent = getRandomNumber(); // Rastgele sayıyı paragrafa yazdırır
// }

// setInterval(updateParagraph, 1000); // 10 saniyede bir rastgele sayıyı günceller
