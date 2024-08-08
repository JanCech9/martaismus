 
function displayGalery() {
    let img = document.createElement('img');
    img.src = 'paintings/p_01.JPG';
    document.getElementById('body').appendChild(img);
 }


if(window.attachEvent) {
    window.attachEvent('onload', displayGalery);
} else {
    if(window.onload) {
        var curronload = window.onload;
        var newonload = function(evt) {
            curronload(evt);
            displayGalery();
        };
        window.onload = newonload;
    } else {
        window.onload = yourFunctionName;
    }
}






