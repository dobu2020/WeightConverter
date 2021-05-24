const lbs=document.getElementById('lbsInput');
const grams=document.getElementById('gramsOutput');
const kilograms=document.getElementById('kgsOutput');
const ounces=document.getElementById('ozOutput');

//Adding Event Listeners
document.getElementById('output').style.visibility="hidden";
lbs.addEventListener('input',function(e){
let pounds=e.target.value;
    document.getElementById('output').style.visibility="visible"
    
    //Math to convert Lbs 
    grams.innerHTML=pounds/0.0022046;
    kilograms.innerHTML=pounds/2.2046
    ounces.innerHTML=pounds*16;
    
  
})