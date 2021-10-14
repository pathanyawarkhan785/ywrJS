// console.log("ywr");

function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            const error = true ;
            if(!error){
                console.log("fn = promise resolved");
                resolve() ;
            }
            else{
                console.log("fn = promise rejected");
                reject("not fulfiiled") ;
            }
        }, 2000);
    })
}

func1()
.then(function(){
    console.log("good resolving");
})
.catch(function(error){
    console.log("bad rejected" , error);
})