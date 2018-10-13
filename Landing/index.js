let toggleBtn = document.getElementById("toggle");
let navContainer = document.getElementById("nav-container");
let toggle = true;

toggleBtn.addEventListener('click', function(){
//function to hide nav links
   
    if(toggle === false)
    {
        navContainer.style.display = "none";
        toggle = true;
    } else{
        navContainer.style.display = "flex";
        toggle = false;
    }


});



//hides nav bar on page load and displays as user scrolls
hideNavBar = () => {
    let navBar = document.getElementById("nav-bar");

}

