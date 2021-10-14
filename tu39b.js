// console.log("yetr");

const students = [
    { name: "hardik", salary: 500000 },
    { name: "viraj", salary: 300000 }
];


function enrstd(std) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(std);
            const error = false;
            if (!error) {
                console.log("enrolled successfully");
                resolve();
            }
            else {
                reject();
            }
        }, 3000);
    })
}


function getstd() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (std) {
            str += `<li>${std.name} - ${std.salary}</li>`;
        });
        document.getElementById("students").innerHTML = str;
        console.log("fetched");
    }, 1000);
}

let newstd = { name: "james", salary: 10000000 };
enrstd(newstd).then(getstd).catch(function () {
    console.log("error occured");
});