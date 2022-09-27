// Homework javascript 1

// Buatlah program yang memiliki satu variabel dengan nama “printSegitiga” 
// yg berisi tipe data number yang menghasilkan output segitiga terbalik yang berisi angka

// Contoh: 
// const printSegitiga = 5

// Output: 
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1


// onst printSegitiga = “enam”
// Output:
// “Data harus number”



// ======================================================= //

const printSegitiga = (nilai) => {
    
    // validasi
    if(typeof nilai !== "number") return "data harus number"
    if(nilai < 1) return "data harus lebih besar dari 0"
    if(nilai > 5) return "data yang dimasukan harus kurang dari 5"
    
    let num = "";
    for (let i = nilai ; i > 0 ; i--){  //ke bawah
        for (let j = 1 ; j <= i ; j++ ){        //ke kanan
            num += j;   
            //num += i;   // 1 22 333 4444 55555
        }
        num += '\n';
    }
    return num;
}

console.log(printSegitiga(0));