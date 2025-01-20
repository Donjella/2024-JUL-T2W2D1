function randomNumberGenerator() {
    // const random = Math.random() // returns a random number between 0 and 1
    // const randomUpto1025 = random * 1025 // returns a random number between 0 and 1025
    // const randomNumberWeNeed = Math.ceil(randomUpto1025) // returns a random number (without decimal) between 0 and 1025
    // return randomNumberWeNeed

    return Math.ceil(Math.random() * 1025)
}

// fetch("https://pokeapi.co/api/v2/pokemon/1").then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data.name)
//     document.getElementById("pokemon-name").innerText = data.name
// })
    

// function getPokemonData() {
//     const fetchPromise = fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumberGenerator()}`).then((response) => {
//         return response.json()
//     })
//     return fetchPromise
// }

async function getPokemonData() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumberGenerator()}`)
        const pokemonData = await response.json()
        return pokemonData
    } catch(err) {
        console.log(err)
    }
}
    

document.getElementById("get-pokemon-button").addEventListener("click", () => {

//     const pokemonList = []

//     getPokemonData().then((data) => {
//         pokemonList.push(data.name)
//         return getPokemonData()
//     }).then((data) => {
//         pokemonList.push(data.name)
//         return getPokemonData()
//     }).then((data) => {
//         pokemonList.push(data.name)
//         return getPokemonData()
//     }).then((data) => {
//         pokemonList.push(data.name)
//         return getPokemonData()
//     }).then((data) => {
//         pokemonList.push(data.name)
//         console.log(pokemonList)
//     })

    const promiseList = []

    for (let i = 0; i < 5; i++) {
        const promise = getPokemonData().then((data) => {
            return data.name
        })
        promiseList.push(promise)
    }

    Promise.all(promiseList).then((dataList) => {
        console.log(dataList)
    }).catch((error) => {
        console.log(err)
    })

})