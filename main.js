const arrayOfNames = document.querySelectorAll('.card-name')
const card = document.querySelectorAll('.card')
let array = ['Katrine', 'Jennifer', 'Woody']
const cards = ['Charly', 'Woody', 'Jennifer', 'Katrine', 'Sophia', 'Timmy', 'Scarlett', 'Freddie']
const images = ['assets/images/charly.png', 'assets/images/Woody.png', 'assets/images/Jennifer.png', 'assets/images/Katrine.png', 'assets/images/Sophia.png', 'assets/images/timmy.png', 'assets/images/scarlett.png', 'assets/images/freddie.png']

//-------------------------------S L I D E R------------------------------------- 

$('.slider-button').click(slide)
$('.slider-button').click(animationChangePets)

function slide(){
    let arrayOfCards = new Array(3);
    for (let i = 0; i < arrayOfCards.length; i++){
        let element = Math.floor(Math.random() * cards.length);
        if (arrayOfCards.includes(cards[element]) == false) arrayOfCards[i] = cards[element];
        else i--;
        for (let j = 0; j < array.length; j++){
            if(arrayOfCards[i] == array[j]) i--;
        }
    }
    for (let i = 0; i < cards.length; i++){
        switch(cards[i]){
            case arrayOfCards[0]: 
                arrayOfNames[0].textContent = cards[i]
                $('.card-katrine-img').attr({'src': images[i]})
                break
            case arrayOfCards[1]:
                arrayOfNames[1].textContent = cards[i]
                $('.card-jennifer-img').attr({'src': images[i]})
                
                break
            case arrayOfCards[2]:
                arrayOfNames[2].textContent = cards[i]
                $('.card-woody-img').attr({'src': images[i]})
                break 
        }
    }
    array = arrayOfCards
}

function animationChangePets() {
    for (let i = 0; i < 3; i++){
      $(card[i]).addClass('animation')
      setTimeout(hideClass, 500);
    }    
};

function hideClass(){
  for (let i = 0; i < 3; i++){
    $(card[i]).removeClass('animation')
  }
}

//------------------------F E E D B A C K  F O R M------------------------

$('.feedback').click(function () {
    $('.feedback-window').animate({
        top: "10%"
    })
    $('.background').addClass('shadow')
    $('.body').css({'overflow': 'hidden'})
    $('.header').css({'opacity': '20%'})
    $('.feedback').removeClass('header-menu-item__disabled')
    $('.feedback').addClass('header-menu-item__active')
    $('.main-page').addClass('header-menu-item__disabled');
    $('.main-page').removeClass('header-menu-item__active');
});

$('.close-button').click(closeForm)

function closeForm() {
    $('.feedback-window').animate({
        top: "-500%"
    })
    $('.header').css({'opacity': '100%'})
    $('.background').removeClass('shadow')
    $('.body').css({'overflow': 'visible'})
    $('.feedback').removeClass('header-menu-item__active')
    $('.feedback').addClass('header-menu-item__disabled')
    $('.main-page').addClass('header-menu-item__active');
    $('.main-page').removeClass('header-menu-item__disabled');
}

fields = document.querySelectorAll('.field')

$('.feedback-form').submit( function (event) {
    let count = 0
    event.preventDefault()
    for (var i = 0; i < fields.length; i++) {
        if (!fields[i].value) count++
    }
    if (count == 0) {
        closeForm()
        $('.submit-feedback').show()
        setTimeout(() => {
            $('.submit-feedback').hide()
        }, 5000);
    }
    
})

