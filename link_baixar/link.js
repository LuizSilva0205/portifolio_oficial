var url_input = document.querySelector("input")
var downloaderBtn = document.querySelector("button")

/*downloaderBtn.addEventListener("click", async () => {
    try{
        alert('Baixando')
        const response = await fetch(url_input.value)
        const file = await response.blob()
        const link = document.createElement("a")
        link.href = URL.createObjectURL(file)
        link.download = new Date().getTime()
        link.click()
    }catch(error){
        alert('Falha ao baixr o arquivo')
    }
})*/



baixar = async () =>{
    try{
        const response = await fetch(url_input.value)
        const file = await response.blob()
        const link = document.createElement("a")
        link.href = URL.createObjectURL(file)
        link.download = new Date().getTime()
        link.click()
    }catch(error){
        alert('Falha ao baixar o arquivo')
        console.log(url_input)
    }
}

