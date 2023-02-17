function optionMenu3 () {
    let choice = document.menuNow.global3.selectedIndex;
    let urlNow = document.menuNow.global3.options[choice].value; 
    window.location.href = urlNow;
}