// console.log("yetr");

const students  = [ 
    {name : "hardik" , salary : 500000},
    {name : "viaj" , salary : 300000}
] ;

function enrstd(std , afcall){
    setTimeout(function()  {
        students.push(std) ;
        console.log("enrolled successfully");
        afcall() ;
    }, 3000);
}

function getstd(){
    setTimeout(function() {
        let str = "" ;
        students.forEach(function(std){
            str += `<li>${std.name}</li>` ;
        }) ;
        document.getElementById("students").innerHTML=str ;
        console.log("fetched");
    }, 1000);
}

let newstd = {name : "james" , salary : 10000000} ;
enrstd(newstd , getstd) ;