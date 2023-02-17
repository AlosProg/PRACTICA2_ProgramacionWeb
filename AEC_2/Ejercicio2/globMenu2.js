function optionMenu2 () {
    let choice = document.menuNow.global2.selectedIndex;
    let urlNow = document.menuNow.global2.options[choice].value; 
    window.location.href = urlNow;
}