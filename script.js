function toggleExtra() {
    const info = document.getElementById('extraInfo'); // selects hidden information 
    const btn = document.querySelector('.show_hobbies'); // selects the button that was clicked
    if (info.style.display === 'block') {
        info.style.display = 'none'; // hiding content if visible
        btn.textContent = 'Show Hobbies'; // changing button label
    }else {
        info.style.display = 'block'; // if its currently visible, showing it.
        btn.textContent = 'Hide Hobbies'; // updating the labe;
    }
}
function changeBg(sel) { // sell refers to select statement 
    document.getElementById('card').style.background = sel.value;
}