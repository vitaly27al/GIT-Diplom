(function () {

    // program slider

    new Swiper('.programs_slider', {

        spaceBetween: 30,
        loop:true,
        slidesPerView: 3,
        


        navigation: {
            nextEl: '.program_button-next',
            prevEl: '.program_button-prev',
        },

        // breakpoints: {
        //     601: {
        //         slidesPerView: 3,
        //     },
        //     801: {
        //         spaceBetween: 32,
        //     },
        //     1101: {
        //         slidesPerView: 4,
        //     }
        // }

    });

    // accordion

    const accordionLists = document.querySelectorAll('.accordion_list')

    accordionLists.forEach(el => {



        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion_list-item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion_list-item--opened .accordion_list-content')

            const accordionControl = e.target.closest('.accordion_list-control')
            if (!accordionControl) return
            e.preventDefault()
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion_list-item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }

            accordionItem.classList.toggle('accordion_list-item--opened');

            if (accordionItem.classList.contains('accordion_list-item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null
            }

        });


})()