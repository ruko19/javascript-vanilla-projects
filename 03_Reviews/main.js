const people = [
    {
        id: 1,
        img: "./imgs/aiony-haust-3TLl_97HNJo-unsplash.jpg",
        name: "Sara Jones",
        job: "Ux Designer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A sequi impedit ratione quidem possimus hic nobis aperiam facere animi laborum?"
    },
    {
        id: 2,
        img: "./imgs/ian-dooley-d1UPkiFd04A-unsplash.jpg",
        name: "Juan Pablo",
        job: "Music Producer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A sequi impedit ratione quidem possimus hic nobis aperiam facere animi laborum?"
    },
    {
        id: 3,
        img: "./imgs/michael-dam-mEZ3PoFGs_k-unsplash.jpg",
        name: "Michael Martinez",
        job: "Reciclador",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A sequi impedit ratione quidem possimus hic nobis aperiam facere animi laborum?"
    }


];

const img = document.getElementById('imgcard');
const nameC = document.getElementById('nameCard');
const jobC = document.getElementById('job');
const descriptionC = document.getElementById('description');


const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn')
let contador = 0;

window.addEventListener("DOMContentLoaded", () => {
    showPeople(contador)
})

const showPeople = (person) => {
    const item = people[person];
    img.src = item.img
    nameC.textContent = item.name;
    jobC.textContent = item.job;
    descriptionC.textContent = item.description

}

nextBtn.addEventListener('click', () => {
    contador++
    if (contador > people.length - 1) {
        contador = 0
    }
    showPeople(contador)


});

prevBtn.addEventListener('click', () => {
    contador--
    if (contador < 0) {
        contador = people.length - 1
    }
    showPeople(contador)
})