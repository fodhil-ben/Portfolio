
var list = document.querySelector('.list')
var ul = document.getElementById('menu-list')
var fill = document.querySelector('.fill')
var header = document.querySelector('.header')
var body = document.querySelector('body')
var switch_mode = document.querySelector('.mode-switch')
var dark_fill = document.querySelector('.dark-fill')
var link1 = document.getElementById('link1')
var link2 = document.getElementById('link2')
var link3 = document.getElementById('link3')

list.addEventListener('click', function (){
    ul.style.transitionDelay='.5s'
    ul.classList.add('width')
    ul.style.right='0'
    ul.style.zIndex='11'
    fill.style.height='100%'
    fill.style.transitionDelay='0s'
}) 
var close = document.getElementById('close')
close.addEventListener('click', function(){
    console.log('dddddddddd')
    ul.style.transitionDelay='0s'
    ul.classList.remove('width')
    ul.style.right='-300px'
    ul.style.zIndex='-11'
    fill.style.height='0'
    fill.style.transitionDelay='.5s'
})
link1.addEventListener('click', function(){
    console.log('dddddddddd')
    ul.style.transitionDelay='0s'
    ul.classList.remove('width')
    ul.style.right='-300px'
    ul.style.zIndex='-11'
    fill.style.height='0'
    fill.style.transitionDelay='.5s'
})
link2.addEventListener('click', function(){
    console.log('dddddddddd')
    ul.style.transitionDelay='0s'
    ul.classList.remove('width')
    ul.style.right='-300px'
    ul.style.zIndex='-11'
    fill.style.height='0'
    fill.style.transitionDelay='.5s'
})
link3.addEventListener('click', function(){
    console.log('dddddddddd')
    ul.style.transitionDelay='0s'
    ul.classList.remove('width')
    ul.style.right='-300px'
    ul.style.zIndex='-11'
    fill.style.height='0'
    fill.style.transitionDelay='.5s'
})

switch_mode.addEventListener('click', function(){
    var class_list = body.classList
    if(class_list != 'dark-mode'){
        class_list.add('dark-mode')
        dark_fill.classList.add('filled')
    }
    else{
        class_list.remove('dark-mode')
        dark_fill.classList.remove('filled')

    }
}
)


// media query
