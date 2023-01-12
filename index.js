var btn = document.getElementsByClassName("numbers");
var submit = document.getElementById("submit")
var rate = ''



for(var i = 0; i < btn.length; i++){
    const button = btn[i]
    button.addEventListener("click", ()=>{
       rate = button.innerHTML 
       let linea = document.getElementById("rate");
       linea.innerHTML ="Than you! you selected " + rate +" out of 5"
    })
};

submit.addEventListener("click", ()=>{ 
    let card_2 = document.getElementById("section_2").style = "display: show";    
    let card_1 = document.getElementById("section_1").style.display = 'none'
    
})









