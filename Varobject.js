// HomeWork Javascript 1

// Buat variabel dengan nama biodata dan tipe data object dengan value dan tipe data  sebagai berikut:
// name (string)
// age(number)
// hobbies (array)
// IsMarried (boolean)
// schoolList (Array of Object) with key name, yearIn, yearOut, and major (if any, if no set “null” )
// skills (Array of Obj) with key skillName and level (beginner, advanced, expert)
// interestInCoding (Boolean)

// Contoh: 
// const biodata = {
// 	name: “arkademy”,
// 	age: …
// .... : ...  
// }



// ================================================================ //


const biodata = {
    nama : "Muhammad Farisan. H",
    age : 23,
    hobbies: ["Playing Guitar", "Travelling"],
    IsMarried : false,
    
    schoolList : [
        {name: "SMPN 162 Jakarta",
        yearIn : 2011,
        yearOut : 2014,
        major : "Ilmu Pengetahuan Alam"},
        
        {name: "SMAN 70 Jakarta",
        yearIn : 2014,
        yearOut : 2017,
            major : "Ilmu Pengetahuan Alam"},
        ],

        skill : [
            {
                skillName: "Playing Guitar", 
                level: "Beginner",
            },
            
            {
                skillName: "Coding", 
                level: "Beginner",
            },
        ],

    interestInCoding : true,

    };

    console.log(biodata);

    
    