function optionMenu1 () {
    let choice = document.menuNow.global1.selectedIndex;
    let urlNow = document.menuNow.global1.options[choice].value; 
    window.location.href = urlNow;
}