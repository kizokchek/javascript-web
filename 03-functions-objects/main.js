const users = [
    {id:1, login: "1", password:"1", type:'VIP', sale:20},
    {id:2, login:"2", password:"2", type:'registered', sale:5}
];


const products = [
    {
        name: 'Daenerys Sitting on Throne',
        price: 512,
        img: 'daenerys.jpeg',
        type: 'public' 
        },
    {
        name: 'Fawkes Vinyl Figure',
        price: 312,
        img: 'fawkes.jpeg',
        type: 'VIP' 
        },
    {
        name: 'Flash Vinyl Figure',
        price: 645,
        img: 'flash.jpeg',
        type: 'publick' 
        },
    {
        name: 'Kakashi',
        price: 700,
        img: 'kakashi.jpeg',
        type: 'VIP' 
        },
    {
        name: 'The Mandalorian on Blurg',
        price: 400,
        img: 'mandalorian.jpeg',
        type: 'publick' 
        },
    {
        name: 'Naruto',
        price: 639,
        img: 'naruto.jpeg',
        type: 'VIP' 
        },
    {
        name: 'Rey Vinyl Figure',
        price: 138,
        img: 'rey.jpeg',
        type: 'publick' 
        },
    {
        name: 'Steve Trevor Vinyl Figure',
        price: 138,
        img: 'steve.jpeg',
        type: 'publick'
        },
    {
        name: 'Moana Te Ka',
        price: 211,
        img: 'te_ka.jpeg',
        type: 'publick'
    }    
];


// повертає об'єкт - користувача, або пустий об'єкт
function userVerification(login, password){
    for (let i = 0; i < user.length; i++){
        if(login === users[i].login && password === users[i].password)
            return users[i]
    }
    return {}
}


let userRegistered = 'public';
let userLogin;
let userPassword;
let user = {}


if (confirm("Ви зареєстрований?")) {
    userLogin = prompt('Введіть логін:')
    userPassword = prompt('Введіть пароль:')
    user = userVerification(userLogin, userPassword)
}


console.log('user=', user);


let container = "<header><h1>Funko</h1></header>"
container += "<section><h2>Новинки</h2>"
let divProducts = '';


function makeDiv(product) {
if (user.hasOwnProperty('id') && user.type == 'VIP'){
    price = Math.round(product.price * ((100 - user.sale) / 100))
}

    return '<div>'
        + '<p><img src="images/' + product.img +'"></p>'
        + '<h4>'+ product.name +'</h4>'
        + '<p>'+ product.price +'</p>'
        + '</div>';
}


for (let i = 0; i < products.length; i++) {
    if (user.hasOwnProperty('id')){
        divProducts += makeDiv(products[i])
    } else {
        if( products[i].type == 'VIP')
            divProducts += makeDiv(products[i])
    }
}


container += divProducts;


container += '</section>'
document.body.innerHTML = container;