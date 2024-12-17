const Textfield = document.getElementById("input-text");
const ResultQR = document.getElementById("result-QR");
const ImgBox=document.getElementById("img-box")



function generateQR(){
    if(Textfield.value.length > 0){
        ResultQR.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+
        Textfield.value;
        ImgBox.classList.add("result-img")
    }else{
        ImgBox.classList.remove("result-img")
        Textfield.classList.add("error")
        setTimeout(()=>{
            Textfield.classList.remove("error")
        },500)
    }
}

// Select the toggle button and the icon
const toggleButton = document.getElementById("darkModeToggleId");
const darkModeIcon = document.getElementById("darkModeIcon");
const elementBox = document.getElementById("element");
const Datacontainer=document.querySelector(".container")
const footer=document.querySelector(".footer")

// Add an event listener for the button
toggleButton.addEventListener("click", () => {
  // Toggle the dark-mode class on the body
  document.body.classList.toggle("dark-mode");

  // Update the icon based on the mode
  if (document.body.classList.contains("dark-mode")) {
    darkModeIcon.classList.remove("fa-sun");
    darkModeIcon.classList.add("fa-moon"); // Moon icon for dark mode
    darkModeToggleId.style.backgroundColor = "#565656";
    darkModeToggleId.style.boxShadow = "inset 2px -2px 5px #bdbdbd,0 0 4px #5a5a5a";
    elementBox.style.backgroundColor="#fffd";
    Datacontainer.style.backgroundColor="#5c63865d";
    Datacontainer.style.boxShadow=" 0 0 10px #232c3599";
    footer.style.backgroundColor="#4448605d";
    footer.style.boxShadow="0 0 10px #444860b9";
    

    

} else {
    darkModeIcon.classList.remove("fa-moon");
    darkModeIcon.classList.add("fa-sun"); // Sun icon for light mode
    darkModeToggleId.style.backgroundColor = "#f6dd00"
    darkModeToggleId.style.boxShadow = "inset 4px -5px 10px #ff6200,0 0 8px #5a5a5a"
    elementBox.style.backgroundColor="#020617";
    Datacontainer.style.backgroundColor="#c8cacb84";
    Datacontainer.style.boxShadow=" 0 0 10px #8c949b99";
    footer.style.backgroundColor="#cbd5e1";
    footer.style.boxShadow="0 0 10px 3px #cbd5e1";

}
});