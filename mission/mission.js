const themeSelector = document.getElementById("theme-select");
themeSelector.addEventListener("click",changeTheme)

function changeTheme() {
    //check to see what the current value of our select is. The current value is conveniently found in themeSelector.value!
    if (themeSelector.value === "dark"){
    //themeSelector.value("theme-select")
	document.body.classList.add('dark')
    document.querySelector("#Logo").src= "images/byui-logo_white.png"
    }
    // if the value is dark then:
        // add the dark class to the body
        // change the source of the logo to point to the white logo.
	else {document.body.classList.remove('dark'),document.querySelector("#Logo").src= "images/byui-logo_blue.jpg"}
    // otherwise
        // remove the dark class
        // make sure the logo src is the blue logo.
}           
// add eventlistener to the themeSelector element here. Use the changeTheme function as the event handler function.