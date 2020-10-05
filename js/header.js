function loadHeader(){
    var html = '<div class="logo"><img src="./assets/PNGs/Logo@2x.png" alt="Logo"></div>'
    +'<div class="user-items"><img src="./assets/PNGs/icn_search@2x.png" alt="Logo">'
    +'<img src="./assets/PNGs/icn_person@2x.png" width="23px" alt="Logo"></div>';
    document.getElementById('header').innerHTML = html;
    alert(window.location.href);
}

loadHeader();