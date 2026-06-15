// Get Started button
function start(){
    alert("Welcome to CodeForge 🚀 Start your coding journey!");
}

// FAQ toggle
function toggle(el){
    let p = el.nextElementSibling;

    if(p.style.display === "block"){
        p.style.display = "none";
    }else{
        p.style.display = "block";
    }
}