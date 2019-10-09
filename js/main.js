let aquariumScreen;

window.document.getElementById("aquarium").addEventListener("click", function(){
    aquariumScreen.recupPosition(event);
    aquariumScreen.creationPoisson();
    aquariumScreen.generationDePoisson();
});

function animation(){
    aquariumScreen.update();
    window.requestAnimationFrame(animation);
}

window.addEventListener("DOMContentLoaded", function() {
     aquariumScreen =  new Aquarium()
    console.log(aquariumScreen)
    animation();
})