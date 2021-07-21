window.onscroll = () => {

    let scroll = document.querySelector('header');

    if (window.pageYOffset > 0 ) {
        scroll.classList.add('sticky');
    } else {
        scroll.classList.remove('sticky');
    }
}