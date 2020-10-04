document.getElementById('search-button').addEventListener('click', async function(){
    let email = document.getElementById('email').value
    let url = 'https://ltv-data-api.herokuapp.com/api/v1/records.json?email='+email
    let apiResponse = await getData(url);
    alert(apiResponse)
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