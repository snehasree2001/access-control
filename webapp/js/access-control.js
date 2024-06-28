function checkAccess(page) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'php/access-control.php?page=' + page, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            if (xhr.responseText === 'access_denied') {
                window.location.href = 'pages/404.html';
            } else {
                window.location.href = 'pages/' + page;
            }
        } else {
            window.location.href = 'pages/404.html';
        }
    };
    xhr.send();
    return false; // Prevent the default link action
}



document.getElementById('togglePassword').addEventListener('click', function (e) {
    const password = document.getElementById('password');
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    const icon = this.querySelector('i');
    if (type === 'password') {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    } else {
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
});




function toggleMenu() {
    var sideMenu = document.getElementById('side-menu');
    sideMenu.classList.toggle('open'); // Toggle the 'open' class to show/hide the side menu
}

document.addEventListener('click', function(event) {
    var sideMenu = document.getElementById('side-menu');
    var menuIcon = document.querySelector('header nav ul li.menu-icon');

    // Check if the click is outside the side menu and the menu icon
    if (!sideMenu.contains(event.target) && !menuIcon.contains(event.target)) {
        sideMenu.classList.remove('open'); // Close the side menu if clicked outside
    }
});