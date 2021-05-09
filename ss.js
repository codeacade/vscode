new Promise((resolve, reject) => {
    console.log("working..")
    setTimeout(() => {
        
        resolve('')
    }, 2000)   
}).then(() => console.log("DONE"))