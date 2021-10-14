class employee {
    constructor(name, exp, div) {
        this.name = name;
        this.exp = exp;
        this.div = div;
    }


    slogan() {
        return `i am ${this.name} and the company is best.`;
    }
    joiningyear() {
        return 2019 - this.exp;
    }
    static add(p, y) {
        return p + y;
    }
}

class Programmer extends employee {
    constructor(name, exp, div, lang) {
        super(name, exp, div);
        this.lang = lang ;
    }
    favlang(){
        if(this.lang == "python"){
            return "python" ;
        }
        else{
            return "js" ;
        }
    }
    static mult(a,b) {
        return a*b ;
    }
}

// let ywr = new employee("ywr", 7, "js");
// console.log(ywr);
ywr = new Programmer("ywr" , 5 , "lays" , "js") ;
console.log(ywr);
// console.log(employee.add(10, 20));
let y = Programmer.mult(7,7) ;
console.log(y);