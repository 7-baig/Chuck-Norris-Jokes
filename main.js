// elements
const generate = document.querySelector('#generator');
const container = document.querySelector('#jokesContainer');
const generatorFunction = (res) => {
    const text = document.createElement('P');
    if(res.value.length <= 100) {
    text.innerHTML = res.value;
    container.appendChild(text);
    console.log(res.value.length)
    }
    else {
    text.innerHTML = 'Try again babe :)'
    container.appendChild(text);
    }
} 

// AJAX FUNCTION
const jokeGenerator = () => {
fetch('https://api.chucknorris.io/jokes/random')
.then((response) => {
  if(response.ok) {
    return response.json()
  }
  throw new Error('Request failed!');
}, (networkError) => {
  console.log(networkError.message)
})
.then(jsonResponse => {
  console.log(jsonResponse);
    generatorFunction(jsonResponse)
},)
}

const clear = () => {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    jokeGenerator();
}


generate.addEventListener('click', clear)




