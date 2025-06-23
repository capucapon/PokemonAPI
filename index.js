
// fetch = Function used for making HTTP requests to fetch resources
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript
//         and used for interacting with APIs to retrieve and send 
//         data asynchronously over the web.
//         fetch(url, {options})


// RESPONSE STATUS CODES
// 100 - 199  =>  Informational Responses
// 200 - 299  =>  Succesful Responses
// 300 - 399  =>  Redirection Messages
// 400 - 499  =>  Client Error Responses
// 500 - 599  =>  Server Error Responses

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));

// the poki.api response code is 200 which is ok.  
// you can see it using response => console.log(response)




// ASYNC - AWAIT TYPE OF THE FETCH METHOD

/*
fetchData();

async function fetchData(){

    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/snorlax");
        
        if(!response.ok){
            throw new Error("Could not fetch resource!");
        }
        const data = await response.json();   // returns a promise
        console.log(data);
    }

    catch(error){
        console.error(error);
    }
}

*/



// FETCHING POKEMON APPLICATION STARTS HERE **


async function fetchData(){

    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        
    }
    catch(error){
        console.error(error);
    }
}