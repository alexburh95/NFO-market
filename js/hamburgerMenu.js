"use strict";

const hamb = document.querySelector('.hamb')

const krestik = document.querySelector('.krest')

const hiddenMenu = document.querySelector('.mob_menu')

const catalog = hiddenMenu.querySelector('.mob_catalog')
const catalogMenu = hiddenMenu.querySelector('.home')
const bigMenu = hiddenMenu.querySelector('.main_menu')
const littleMenu = hiddenMenu.querySelector('.catalog_menu')
hamb.addEventListener('click',()=>{
hamb.classList.add('hidden')
krestik.classList.remove('hidden')
hiddenMenu.classList.remove('hidden')

})

krestik.addEventListener('click', ()=>{
    hamb.classList.remove('hidden')
krestik.classList.add('hidden')
hiddenMenu.classList.add('hidden')
})

catalog.addEventListener('click', ()=>{
bigMenu.classList.add('hidden')
littleMenu.classList.remove('hidden')
})



catalogMenu.addEventListener('click', ()=>{
    bigMenu.classList.remove('hidden')
    littleMenu.classList.add('hidden')
    })

















