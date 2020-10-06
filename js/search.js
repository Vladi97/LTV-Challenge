async function loadSearchSection(){
    var url = window.location.href;
    var data = getData(url);
    var html = '<br>';
    if(url.includes('result')){
        html += '<br><br>';
    };
    html += '<div class="title-search-container">'
    +'<h1 class="white-text title">'+data[0]+'</h1>'
    +'<p class="white-text subtitle"><b class="yellow-text bold">'+data[1]
    +'</b> - '+data[2]+'</p></div>';
    if(!url.includes('result.html')){
        html += '<div class="form-search-container">';
    }else{
        html += '<div class="form-search-container result-form">';
    }
    html += '<div class="search-inputs"><input placeholder="EMAIL" value="" name="email" '
    +'id="email" class="white-bg search-input" type="email"/><span id="floating-label" class="floating-label">'
    +'EMAIL</span></div><div class="search-button-container"><button type="button" id="search-button"'
    +' class="blue-text search-button yellow-bg bold">GO!</button></div></div><div '
    +'class="message-label-container"><p class="icon"><img src="../assets/SVGs/lock.svg" alt="Lock icon">'
    +'</p><p class="yellow-text bold label-message">Enter Any Email Address. They won\'t be notified.</p></div>';
    document.getElementById('search').innerHTML = html;
}
function getData(url){
    var data = [];
    if(url.includes('result')){
        data.push('Can’t Find The Right Person?');
        data.push('Try Again');
        data.push('Make a new search');
    }else{
        data.push('Search Any Email Address');
        data.push('Start Here');
        data.push('Look up the owner\'s name, photos and online profiles. See what you find!');
    }
    return data;
}
loadSearchSection();
async function saveEmail(){
    var value = document.getElementById('email').value;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(value.match(mailformat)){
        sessionStorage.setItem('email-searched', value);
        window.location.href = '../pages/result.html'
    }else{
        window.location.href = '../pages/result.html'
    }
}
function changeLabelText(){
    debugger
    var label = document.getElementById('email');
    var value = label.value;
    if(value!==''){
        if(value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
            label.innerHTML = 'Please add a valid email address'
        }else{
            label.innerHTML = 'EMAIL'
        }
    }
}
document.getElementById('email').addEventListener('input', (event) => {
    var label = document.getElementById('floating-label');
    if(event.target.value!==''){
        if(event.target.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
            label.innerHTML = 'EMAIL'
        }else{
            label.innerHTML = 'Please add a valid email address'
        }
    }else{
        label.innerHTML = 'EMAIL'
    }
});
document.getElementById('search-button').addEventListener('click', saveEmail, false);