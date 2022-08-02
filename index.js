//Promises 
//GET https://icanhazdadjoke.com/

const jokes=document.querySelector('#joke');
const jokeBtn=document.querySelector('#joke-btn')

const generateJokes=()=>{

    const setHeader={
        headers: {
            Accept:"application/json"
        }
    }

    fetch('https://icanhazdadjoke.com/', setHeader)
    .then((res)=>res.json())
    .then((data)=>{
        jokes.innerHTML=data.joke
    }).catch((error)=>{
        console.log(error);
    })
}


//fetch(): Once we click on then we will get responce or catch the error
//Once we get the data we will get data in HTML but we have to convert in JSON
//If u are using Fat arrow function we are not required return and {}
//Once we click on button we have to call the function

jokeBtn.addEventListener('click',generateJokes);
generateJokes()