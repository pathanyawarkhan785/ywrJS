// console.log("ywr");


let mybtn = document.getElementById("mybtn");

let content = document.getElementById("content");

function getdata() {
    console.log("started getdata");
    url = "ywr.txt" ;
    fetch(url).then((res)=>{
        console.log("first");
        return res.text() ;
    }) .then((data) => {
        console.log("second");
        console.log(data);
    })
}
console.log("before");
getdata();
console.log("after");
