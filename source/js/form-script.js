var modalFalse = document.querySelector('.modal-false');
var modalTrue = document.querySelector('.modal-true');
var firstName = document.querySelector('[name=first-name]');
var secondName = document.querySelector('[name=second-name]');
var email = document.querySelector('[name=email]');
var form = document.querySelector('.form');
var closeFalse = document.querySelector('.button-false');
var closeTrue = document.querySelector('.button-true');

form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    if(!firstName.value || !secondName.value || !email.value) {
        email.classList.add('required');
        firstName.classList.add('required');
        secondName.classList.add('required');
        modalFalse.classList.add('modal-show');
    } else {
        
        modalTrue.classList.add('modal-show');
        
    }
});


closeFalse.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalFalse.classList.remove('modal-show');
    email.classList.remove('required');
    firstName.classList.remove('required');
    secondName.classList.remove('required');
});

closeTrue.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalTrue.classList.remove('modal-show');
    
});
