// callback 

console.log('a');

setTimeout(() => {
  console.log('Hello world');
}, 1000);

console.log('c');


//  a,c,Hello world


// promises :::


const myPromise = new Promise((resolve, reject) => {
   const randomNumber = Math.floor(Math.random() * 2);
   if(randomNumber === 0) {
     resolve();
   }else {
     reject();
   }
});


myPromise
     .then(() => console.log('Success'))
     .catch (() => console.log('Something went wrong'))



// fetch 

fetch('url')
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));



// async await - try(success),catch(error)


const fetchPokemon = async () => {
    try{
        const res = await('url');
        const data = await res.json();
        console.log(data)
    }catch(err) {
        console.log(err);
    }
  
}
 
fetchPokemon();