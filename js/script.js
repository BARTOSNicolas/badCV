var progressArray = new Array();
progressArray = $(".skill-progress");

for(let i=0; i<progressArray.length; i++){
   var progressBar = progressArray[i]
   var valeurHTML = progressBar.getAttribute('data-valeur');
   progressBar.style.width = valeurHTML+"%";
}
