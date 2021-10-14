// console.log("this is js file");

const fetchbtn = document.getElementById("fetch");
fetchbtn.addEventListener("click", fetchbtnhandler);

function fetchbtnhandler() {
    console.log("btn clicked");

    const xhr = new XMLHttpRequest();

    xhr.open("get" , "ywr.txt") ;

    xhr.onload = function () {
        console.log(this.responseText);
    }

    xhr.onprogress = function () {
        console.log("request on progress");
    }


    xhr.send();
    console.log("request done");
}
