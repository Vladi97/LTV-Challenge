document.getElementById('search-button').addEventListener('click', async function(){
    let email = document.getElementById('email').value;
    let url = 'https://ltv-api-challenge.herokuapp.com/email='+email;
    let apiResponse = await getData(url);
})

async function getData(url){
    await fetch(url, {headers: {'content-type': 'application/json; charset=utf-8', 'Accept': '*/*', 'Origin': 'https://ltv-challenge.herokuapp.com/'}, mode: 'cors'})
    .then(function(response) {
        return response;
    })
    .catch(function(err) {
        return err;
    });
}