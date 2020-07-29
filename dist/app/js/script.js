
let user = document.getElementById('user');
let user_block = document.getElementById('user_block');
user.addEventListener("click", function (e) {
    user_block.classList.toggle('open');
});
