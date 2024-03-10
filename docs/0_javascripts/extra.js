window.onload = function () {
    for (let item of document.getElementsByTagName('img')) {
        if (item.classList.contains('pass') === false) {
            item.setAttribute('onclick', 'clickAction(this)');
        }
    }
}