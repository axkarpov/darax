//let header_block = document.getElementById('header');
let user = document.getElementById('user');
let user_block = document.getElementById('user_block');
user.addEventListener("click", function (e) {
    user_block.classList.toggle('open');
});

// document.documentElement.addEventListener("click", function (e) {
//     if (!$(e.target).closest(".header__user").length) {
//         user_block.classList.toggle('open');
//     }
// })