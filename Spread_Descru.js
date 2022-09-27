// Dari data dibawah ini
// let data = {
// id: 1,
// name: "Leanne Graham",
// username: "Bret",
// email: "Sincere@april.biz",
// address: 
// {
// street: "Kulas Light",
// suite: "Apt. 556",
// city: "Gwenborough",
// zipcode: "92998-3874",
// },
// phone: "1-770-736-8031 x56442",
// website: "hildegard.org",
// }

// a.     Ubahlah data  tersebut menggunakan spread operator menjadi: 
//        name: nama anda
//        email: email anda
//        hobby: hobi anda

// b.     Ambilah data “street dan city” tersebut menggunakan destructuring



// ================================================================ //

let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
        {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }
    
    let databaru = {
        name: "Muhammad Farisan",
        email: "acil@gmail.com",
        hobby: "Playing Guitar",
    }

    //jawaban a spread operator
    const newdata = { ...data, ...databaru };
    console.log(newdata);

    //jawaban b destructuring
    // const {address} = data;
    // const {street, city} =address;
    // console.log(street,city);

    //destructuring bisa juga cara short hand
    const {address :{street,city}} = data;
    console.log(street,city);
