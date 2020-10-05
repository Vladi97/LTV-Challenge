function loadFooter(){
    var html = '<div class="about">'
    +'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '
    +'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud '
    +'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>'
    +'<div class="links"><p><a href="#" class="blue-text bold">Terms | Privacy</a></p></div>';
    document.getElementById('footer').innerHTML = html;
}

loadFooter();