const navSlide = () => {
    const navList = document.querySelector('.nav-list');
    const listLi = document.querySelectorAll('.nav-list li');
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        navList.classList.toggle('nav-active');

        listLi.forEach((list, index) => {
            if(list.style.animation){
                list.style.animation ='';
            } else{
                list.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');

    });
}
navSlide();