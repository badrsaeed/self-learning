var images = Array.from(document.querySelectorAll(".item img"));
var currentImageIndex = 0;
var lightContainer = document.getElementsByClassName("light-container")[0];
var lightcontent = document.getElementsByClassName("light-content")[0];

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', (e)=>{
        var cImage = e.target.src;
        currentImageIndex = images.indexOf(e.target);
        lightContainer.style.display = "flex";
        lightcontent.style.backgroundImage = `url(${cImage})`;
    })
}

var closeBtn = document.getElementById("close");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
closeBtn.addEventListener("click", closeFn)

function closeFn(){
    
        lightContainer.style.display = "none";
    
}

prevBtn.addEventListener("click", getPrevious)
nextBtn.addEventListener("click", getNext)
function getPrevious(){
    if(currentImageIndex !== 0)
    {
        currentImageIndex--;
        lightcontent.style.backgroundImage = `url(${images[currentImageIndex].src})`;
    }
    else
        currentImageIndex = images.length - 1;
}
function getNext(){
    
        if(currentImageIndex < images.length - 1)
        {
            currentImageIndex++;
            lightcontent.style.backgroundImage = `url(${images[currentImageIndex].src})`;
            console.log(images[currentImageIndex].src);
        }
        else
            currentImageIndex=0;
}

document.addEventListener("keydown", function (e){
    if(e.key == "ArrowRight")
        getNext();
    else if(e.key == "ArrowLeft")
         getPrevious();
    else if(e.key == "Escape")
        closeFn();
});
document.addEventListener("ArrowLeft", getPrevious);
document.addEventListener("Esc", closeFn);