console.log("Asynchronous JS")

// typical structure of a promise
// const firstPromise = new Promise((resolve, reject) => {
//     reject("Hello")
// })

// firstPromise.then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log("Error " + err)
// }).finally(() => {
//     console.log("Finally")
// })

const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Inside timeout")
        reject()
    }, 3000)
})

timeoutPromise.then(() => {
    console.log("After timeout")
}).catch(() => {
    console.log("Inside catch")
})

console.log("Don't wait for anything")