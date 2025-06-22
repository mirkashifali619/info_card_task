function toggleExtra() {
    const info = document.getElementById('extraInfo');
    const btn = document.querySelector('.show_hobbies');
    if (info.style.display === 'block') {
        info.style.display = 'none';
        btn.textContent = 'Show Hobbies';
    }else {
        info.style.display = 'block';
        btn.textContent = 'Hide Hobbies';
    }
}
function changeBg(sel) {
    document.getElementById('card').style.background = sel.value;
}