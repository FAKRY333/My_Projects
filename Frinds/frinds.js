
// get elements 
let spanName = document.querySelector('.name');
let age = document.querySelector('.age');
let contry = document.querySelector('.contry');
let skills = document.querySelector('.skills');
let btn = document.querySelector('.btn');
let inp = document.querySelector('.nameIN');
let ageIN = document.querySelector('.ageIN');
let contryIN = document.querySelector('.contryIN');
let skillsINput = document.querySelector('.skIN')
let id  = document.querySelector('.id');
let search  = document.querySelector('.search');
// active two and function three 3
window.onload = () => {
    let frind = localStorage.getItem('frinds');
    frind = JSON.parse(frind);
    let user = localStorage.getItem('id');
    if (user < frind.length  && user !== '') {
        spanName.textContent = frind[user].Name ;
        age.textContent = frind[user].age ;
        contry.textContent = frind[user].contry ;
        skills.textContent = frind[user].skills ;
    } 
}

// active three and function four 4
search.onclick = () => {
    localStorage.setItem('id' , id.value);
        let frind = localStorage.getItem('frinds');
    frind = JSON.parse(frind);
     let user = localStorage.getItem('id');
     if (user < frind.length && user !== '') {
         spanName.textContent = frind[user].Name ;
         age.textContent = frind[user].age ;
         contry.textContent = frind[user].contry ;
         skills.textContent = frind[user].skills ;
        }
    }


 // active one 1
btn.addEventListener('click',(e) => {
   // function one
    function getFromlocal() {
        let frinds = localStorage.getItem('frinds');
        return  frinds ? JSON.parse(frinds) : [] ;
    }
// function two 2
    function addTolocal() {
     if (ageIN.value === '') return ;
     if (contryIN.value.trim() === '') return ;
     if (skillsINput.value.trim() === '') return ;
     if (inp.value.trim() === '') return ;
        let frinds = getFromlocal();
        frinds.push({
            Name: inp.value,
            age: ageIN.value, 
            contry: contryIN.value,
            skills: skillsINput.value
        });       
   localStorage.setItem('frinds', JSON.stringify(frinds))
    }
    addTolocal()
      location.reload()
})

