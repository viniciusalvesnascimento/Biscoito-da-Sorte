
const onePag = document.querySelector(".onePag")
const twoPag = document.querySelector(".twoPag")

var btnReseat = document.querySelector(".btnReseat") 
var paragraphs = document.querySelectorAll("#container p")
var currentIndex = 0

function handleClick(){ 
    onePag.classList.add("hide")
    twoPag.classList.remove("hide")
}

function handleClickTwo(){
    twoPag.classList.add("hide")
    onePag.classList.remove("hide")
}

btnReseat.addEventListener("click", function() {
    // Ocultando todos os parágrafos
    paragraphs.forEach(function(paragraph) {
         paragraph.classList.add("hide");
    });
    
    // Mostrando o próximo parágrafo (ou o primeiro se chegamos ao último)
    currentIndex = (currentIndex + 1) % paragraphs.length;
    paragraphs[currentIndex].classList.remove("hide");
});

 