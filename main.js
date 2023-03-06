function getData(){

    let pesquisa = document.getElementById('barra_de_pesquisa').value
    console.log(pesquisa)
    pesquisa = pesquisa.replace(' ','+')
    window.open('https://www.google.com/search?q='+pesquisa)
}
