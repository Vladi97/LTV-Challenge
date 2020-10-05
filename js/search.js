document.getElementById('email').addEventListener('change', enableInput);

function enableInput(){
    var input = document.getElementById('email').value;
    if(!input.value==''){
        console.log('change')
        input.classList.add("active");
    }
}