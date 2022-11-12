let event 
let curr_active_row = document.querySelector('.side__bar .active')
let curr_active_cat = document.querySelector('.cat__option')

document.addEventListener('click', e => {
    const el = e.target
    const is_row = el.matches('.row') || el.matches('.row span')
    const is_cat = el.matches('.cat__option')

    if(is_row)
        row_clicked(el)
    else if( is_cat )
        cat_clicked(el)

})

function row_clicked(el){
    if(el.matches('.row span')) el = el.parentElement
    if(el == curr_active_row ) return;

    el.classList.add('active')
    curr_active_row.classList.remove('active')
    curr_active_row = el
}

function cat_clicked(el){
    if(el == curr_active_cat ) return;

    el.classList.add('active')
    curr_active_cat.classList.remove('active')
    curr_active_cat = el
}