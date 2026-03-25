console.log('Hello World!');

let quote = document.getElementById('quote');

function wish(){
  let div = document.getElementById('result');
  
  let btn = document.getElementById('btn');
  btn.style.display = 'none';
  div.innerHTML = '✨ Happy Birthday Dayan🎉🎉 ✨'  
  
  quote.style.display ='block';
  
}