const listaPaises = document.getElementById("lista-paises")
const decripcionPais = document.getElementById("descripcion-pais")

const extraerTodosLosPaises = () => {
    fetch ("#").then(
        (response) => {
            return response.json()
        }).then((data) => {
            console.log(data)
            perrosDos.innerHTML=`

            `
        })