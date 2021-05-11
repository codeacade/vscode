const A1 = () =>{
    return new Promise(r => {
        console.log("Start")
        setTimeout(() => {
            r(12)
        },2000)
        console.log("working")
    })
}

const A2 = () =>{
    return new Promise(r => {
        console.log("Start2")
        setTimeout(() => {
            r(12)
        },2000)
        console.log("working2")
    })
}

A1()
.then(() => console.log("Done"))
.then(A2)
