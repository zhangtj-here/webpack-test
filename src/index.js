import './css/index.css';
import './less/test.less';
import './scss/test.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


var aaa = 123;
class Animal{
    constructor(name){
        this.name = name;
    }

    sayName(){
        console.log(this.name);
    }
}

let lion = new Animal('King');
lion.sayName();
console.log(lion);

let a = 123;
console.log(a);
