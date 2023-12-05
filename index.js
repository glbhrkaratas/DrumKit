var numberOfDrums=document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfDrums; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttoninnerHTML= this.innerHTML;
    makeSound(buttoninnerHTML);
    buttonAnimation(buttoninnerHTML);

    document.addEventListener("keydown", function(event) {
        makeSound(event.key);
        buttonAnimation(event.key);
      });
      function makeSound(key) {
    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play(); 
            break;
            case "s":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play(); 
                break;
                case "a":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play(); 
                    break;
                    case "d":
                        var tom4 = new Audio("sounds/tom-4.mp3");
                        tom4.play();
                        break;
                        case "j":
                            var kickBass = new Audio("sounds/kick-bass.mp3");
                            kickBass.play();
                            break;
                        case "k":
                            var crash = new Audio("sounds/crash.mp3");
                            crash.play();
                            break;
                                case "l":
                                    var snare = new Audio("sounds/snare.mp3");
                                    snare.play();
                                    break;

                                    default:
                                        document.getElementById('hiddenOne').style.display = 'block';
                                    setTimeout(function () {
                                        document.getElementById('hiddenOne').style.display = 'none';
                                      }, 2000);
    }
      }
});
}
 function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
 }