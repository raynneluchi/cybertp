const botaoEl = document.querySelector('#bmodal');
botaoEl.addEventListener('click', abremodal);

function abremodal(e) {
    const modalEl = document.querySelector('.modal');
    modalEl.classList.add('visivel');
}

const botoesFecha = document.querySelectorAll('.fecha');
botoesFecha.forEach(fechaEl =>fechaEl.addEventListener('click', fecharModal));

function fecharModal (e) {
    const modalEl = document.querySelector('.modal');
    modalEl.classList.remove('visivel');
}