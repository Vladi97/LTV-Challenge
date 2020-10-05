async function loadResult(){
    var url = window.location.href;
    var email = url.replace(/.+email=/gi, '');
    email = email.replace(/%40/gi, '@');
    var data = await fetch('https://ltv-api-challenge.herokuapp.com/email='+email, {headers: {'content-type': 'application/json; charset=utf-8', 'Accept': '*/*', 'Origin': 'https://ltv-challenge.herokuapp.com/'}, mode: 'cors'})
    .then(function(response) {
        console.log(response);
        return response;
    })
    .catch(function(err) {
        return err;
    });
    //console.log(data);
    var html = '<div class="logo"><img src="../assets/PNGs/Logo@2x.png" alt="Logo"></div>'
    +'<div class="user-items"><img src="../assets/PNGs/icn_search@2x.png" alt="Logo">'
    +'<img src="../assets/PNGs/icn_person@2x.png" width="23px" alt="Logo"></div>';
    document.getElementById('header').innerHTML = html;
}
loadResult();