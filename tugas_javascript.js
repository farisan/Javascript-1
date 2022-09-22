
//Soal Nomor 1
// const nama = "Muhammad Farisan. H";
// const age = 23;
// const hobbies = ["Playing Guitar", "Travelling"];
// const IsMarried = false;
// const interestInCoding = true;

// const schoolList = {
//     yearIn : 2014,
//     yearOut : 2017,
//     major : "Ilmu Pengetahuan Alam"
// };

// const skill = {
//     skillName : "Guitar",
//     level : ["Beginner", "Advance", "Expert"]
// };


// console.log(nama);
// console.log(age);
// console.log(hobbies);
// console.log(IsMarried);
// console.log(`YearIn : ${schoolList.yearIn} - YearOut : ${schoolList.yearOut} ${schoolList.major}`);
// console.log(`Skill : ${skill.skillName} - ${skill.level[0]}`);
// console.log(interestInCoding);








//soal Nomor 2
// const mtk = 80;
// const bahasa_indonesia = 90;
// const bahasa_inggris = 89;
// const ipa = 69;
// const grade = ["A", "B", "C", "D", "E"];

// const sum = (mtk + bahasa_indonesia + bahasa_inggris + ipa)/4;

// if (isNaN(sum) == false){
    
//     if(sum <= 100 && sum >= 90){
//         console.log(`Nilai Rata-Rata = ${sum}`);
//         console.log(`Grade = ${grade[0]}`);
//     }

//     else if(sum <= 89 && sum >= 80){
//         console.log(`Nilai Rata-Rata = ${sum}`);
//         console.log(`Grade = ${grade[1]}`);
//     }

//     else if(sum <= 79 && sum >= 70){
//         console.log(`Nilai Rata-Rata = ${sum}`);
//         console.log(`Grade = ${grade[2]}`);
//     }

//     else if(sum <= 69 && sum >= 60){
//         console.log(`Nilai Rata-Rata = ${sum}`);
//         console.log(`Grade = ${grade[3]}`);
//     }

//     else if(sum <= 59 && sum >= 0){
//         console.log(`Nilai Rata-Rata = ${sum}`);
//         console.log(`Grade = ${grade[4]}`);
//     }

// }else{
//     console.log("Your data is not valid!!!");
// }







//soal Nomor 3
// const printSegitiga = 5;
// let num = "";
// for (let i = printSegitiga ; i > 0 ; i--){  //ke bawah
//     for (let j = 1 ; j <= i ; j++ ){        //ke kanan
//         num += j;   // 1 12 123 1234 12345
//         //num += i;   // 1 22 333 4444 55555
//     }
//     num += '\n';
// }
// console.log(num);








//soal Nomer 4
// let data = {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: 
//         {
//         street: "Kulas Light",
//         suite: "Apt. 556",
//         city: "Gwenborough",
//         zipcode: "92998-3874",
//         },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     }
    
//     let databaru = {
//         name: "Muhammad Farisan",
//         email: "acil@gmail.com",
//         hobby: "Playing Guitar",
//     }

//     //jawaban a
//     const newdata = { ...data, ...databaru };
//     console.log(newdata);

//     //jawaban b
//     const {address} = data;
//     const {street, city} =address;
//     console.log(street,city);