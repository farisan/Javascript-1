// Buat program yang menghitung rata-rata UN beserta gradenya, 
// dengan mengisi 4 nilai yakni Bahasa indonesia, Bahasa Inggris Matematika dan IPA, 
// yang di dalam program tersebut memiliki validasi yaitu semua nilai tersebut harus 
// diisi dan juga untuk grade memiliki kondisi dengan ketentuan sebagai berikut:

// 90 - 100 = A
// 80 - 89 = B
// 70 - 79 = C
// 60 - 69 = D
// 0 - 59 = E


// Contoh: 
// const mtk = 80
// const bahasaIndonesia = 90
// const bahasaInggris = 89
// const ipa =  69
// …………….
// …………....

// Output: 
// Rata-rata = 82
// Grade = B

// ====================================================================== //


const nilaiUN = (mtk, bahasa_indonesia, bahasa_inggris, ipa) => {
    const grade = ["A", "B", "C", "D", "E"];

    // validasi tipe data dari masing masing mata pelajaran
    if (typeof mtk !== "number") return "Data harus number";
    if (typeof bahasa_indonesia !== "number") return "Data harus number";
    if (typeof bahasa_inggris !== "number") return "Data harus number";
    if (typeof ipa !== "number") return "Data harus number";

    const sum = (mtk + bahasa_indonesia + bahasa_inggris + ipa)/4;

    if(sum <= 100 && sum >= 90){
        return `Nilai Rata-Rata = ${sum} || Grade = ${grade[0]}`;
    }

    else if(sum <= 89 && sum >= 80){
        return `Nilai Rata-Rata = ${sum} || Grade = ${grade[1]}`;
    }

    else if(sum <= 79 && sum >= 70){
        return `Nilai Rata-Rata = ${sum} || Grade = ${grade[2]}`;
    }

    else if(sum <= 69 && sum >= 60){
        return `Nilai Rata-Rata = ${sum} || Grade = ${grade[3]}`;
    }

    else if(sum <= 59 && sum >= 0){
        return `Nilai Rata-Rata = ${sum} || Grade = ${grade[4]}`;         
    }
}

console.log(nilaiUN(100,100,100,100));
console.log(nilaiUN(90.2,90.2,90.2,90.2));
console.log(nilaiUN(89.2,89.2,89.2,89.2)); // problem
console.log(nilaiUN(100,100,100,"100"));
console.log(nilaiUN(100,100,"100",100));
console.log(nilaiUN(100,"100",100,100));
console.log(nilaiUN("100",100,100,100));