document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]')
    
    const herosection = document.querySelector('.hero');
    const hero_height = herosection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicao_atual = window.scrollY;

        if(posicao_atual < hero_height){
            oculta_elementos_header();
        }else{
            exibe_elementos_header();
        }
    })

    //Seção de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            esconde_aba();
            aba.classList.add('shows__list--is-active');
            remove_botao();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    //Seção FAQ, accordions
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreoufecharesposta);
    }
})

function oculta_elementos_header(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibe_elementos_header(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreoufecharesposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementopai = elemento.target.parentNode;

    elementopai.classList.toggle(classe)
}

function remove_botao() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function esconde_aba() {
    const tabs_container = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabs_container.length; i++) {
        tabs_container[i].classList.remove('shows__list--is-active')
    }
}