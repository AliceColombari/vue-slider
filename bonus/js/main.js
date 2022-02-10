/* RISOLUZIONE CON VUE */

// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

const vue = new Vue(
    {
        el: '#app',
        data: {
            items: [
                {
                    url: './img/01.jpg',
                    name: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    url: './img/02.jpg',
                    name: 'Svizzera',
                    text: 'Lorem ipsum.'
                },
                {
                    url: './img/03.jpg',
                    name: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    url: './img/04.jpg',
                    name: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
                },
                {
                    url: './img/05.jpg',
                    name: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
                }
            ],
            active: 0,
        },
        methods: {
            previus() {
                if (this.active == 0) {
                    this.active = this.items.length - 1;
                } else {
                    this.active--;
                }
            },

            next() {
                if (this.active == this.items.length -1) {
                    this.active = 0;
                } else {
                    this.active++;
                }
            },

            // quando clicchi su un'immagine del thumb, essa viene visualizzata in grande
            bigSlide(indice) {
                this.active = indice;
            },
            
            // appena fai click su una delle due freccine, parte l'autoplay, quindi va avanti da solo
            autoPlay() {
                setInterval(this.next,3000)
            }

        }
    }
);


























































/* RISOLUZIONE CON JS */
// const items = [
//     {
//         url:'img/01.jpg',
//         name:'Svezia',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
//     },
//     {
//         url:'img/02.jpg',
//         name:'Svizzera',
//         text:'Lorem ipsum'
//     },
//     {
//         url:'img/03.jpg',
//         name:'Gran Bretagna',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
//     },
//     {
//         url:'img/04.jpg',
//         name:'Germania',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
//     },
//     {
//         url:'img/05.jpg',
//         name:'Paradise',
//         text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
//     }
// ];

// const itemsRef = document.getElementsByClassName('items')[0];
// const thumbsRef = document.getElementsByClassName('thumbs')[0];
// let item = '';
// let thumb = '';
// let active = 1;

// for (let i = 0; i < items.length; i++) {
//     item += `
//         <div class="item">
//             <img src="${items[i].url}" alt="">
//             <div class="text">
//                 <h3>${items[i].name}</h3>
//                 <p>${items[i].text}</p>
//             </div>
//         </div>`
//     thumb += `
//         <div class="thumb">
//             <img src="${items[i].url}" alt="">
//         </div>
//     `
// }

// itemsRef.innerHTML = item;
// document.getElementsByClassName('item')[active].classList.add('active');

// thumbsRef.innerHTML += thumb;
// document.getElementsByClassName('thumb')[active].classList.add('active');

// const prev = document.querySelector('.prev');
// prev.addEventListener('click', function() {
//     if(active == 0) {
//         active = items.length - 1; 

//         document.querySelector('.item.active').classList.remove('active');
//         document.getElementsByClassName('item')[active].classList.add('active');

//         document.querySelector('.thumb.active').classList.remove('active');
//         document.getElementsByClassName('thumb')[active].classList.add('active');
//     } else if(active < items.length) {
//         --active
//         document.querySelector('.item.active').classList.remove('active');
//         document.getElementsByClassName('item')[active].classList.add('active');

//         document.querySelector('.thumb.active').classList.remove('active');
//         document.getElementsByClassName('thumb')[active].classList.add('active');
//     } 
// });

// const next = document.querySelector('.next');
// next.addEventListener('click', function() {
//     if(active < items.length - 1) {
//         ++active
//         document.querySelector('.item.active').classList.remove('active');
//         document.getElementsByClassName('item')[active].classList.add('active');

//         document.querySelector('.thumb.active').classList.remove('active');
//         document.getElementsByClassName('thumb')[active].classList.add('active');
//     } else if(active == items.length - 1) { 
//         active = 0;
//         document.querySelector('.item.active').classList.remove('active');
//         document.getElementsByClassName('item')[active].classList.add('active');

//         document.querySelector('.thumb.active').classList.remove('active');
//         document.getElementsByClassName('thumb')[active].classList.add('active');
//     }
// });