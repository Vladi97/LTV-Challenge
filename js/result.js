async function loadResult(){
    var email = sessionStorage.getItem('email-searched');
    sessionStorage.setItem('email-searched', '');
    debugger
    var result = await fetch('https://cors-anywhere.herokuapp.com/https://ltv-data-api.herokuapp.com/api/v1/records.json?email='+email, 
    {
        headers: {
            'Accept': '*/*', 
            'Accept-Language': 'es-ES,es;q=0.9',
        },
        mode: 'cors'
    })
    .then(function(response) {
        return response.json();
    })
    .catch(function(err) {
        //return 'Sorry, the email you\'ve searched for is not registered in our system!';
        return [];
    });
    renderResult(result, email);
}

function renderResult(result, email){
    var html = '';
    var title ='Sorry, the email you\'ve searched for is not registered in our system!';
    if(email===''){
        title = 'Please type an email in the field bellow!';
    }
    debugger
    if(Object.keys(result).length === 0){
        html = '<div class="title-result-container col-8 offset-2 col-m-12 offset-m-0 col-s-12 offset-s-0">'
        +'<br><h1 class="blue-text title bold">Result</h1><p class="center subtitle">Look at the result below to'
        +' see the details of the person you’re searched for.</p><br><div class="result-container-data not-result">'
        +'<h2>'+title+'</h2></div></div><br>';
    }else{
        html = '<div class="title-result-container col-8 offset-2 col-m-12 offset-m-0 col-s-12 offset-s-0">'
        +'<br><h1 class="blue-text title bold">Result</h1><p class="center subtitle">Look at the result below to'
        +' see the details of the person you’re searched for.</p><br><div class="result-container-data"><div '
        +'class="profile-picture"><div class="circle-step-number blue-bg bold yellow-text"><img width="80%" '
        +'height="80%" src="../assets/PNGs/icn_person@2x.png" alt=""></div></div><div class="profile-metadata">'
        +'<h3 class="name blue-text bold">'+result.first_name+' '+result.last_name+'</h3><p class="profile-description">'
        +result.description+
        '</p><div class="metadata-values"><div class="column"><p class="blue-text"><strong>Address</strong></p>'
        +'<p class="data">'+result.address+'</p><p class="blue-text"><strong>Email</strong></p><p class="data">'
        +result.email+'</p></div><div class="column right"><p class="blue-text"><strong>Phone Numbers</strong></p>';
        var phonesLength = result.phone_numbers.length;
        for(var i = 0; i<phonesLength; i++){
            html += '<p class="data">'+result.phone_numbers[i]+'</p>';
        }
        html += '<p class="blue-text"><strong>Relatives</strong></p></div><br><br></div></div></div><br></div><br>';
        var relativesLength = result.relatives.length;
        for(var i = 0; i<relativesLength; i++){
            html += '<p class="data">'+result.relatives[i]+'</p>';
        }
    }
    document.getElementById('result').innerHTML = html;
}

loadResult();