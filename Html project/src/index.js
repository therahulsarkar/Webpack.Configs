import './style/app.scss'

const a = "Hey I am from Webpack"
console.log(a);

function b(c){
    console.log(c);
}

b(a);

const d = (e) =>{
    console.log(e)
}
d(a);

let data = document.getElementById('calculate');
data.innerHTML = a;