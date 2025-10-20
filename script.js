const form = document.getElementById("formContato")
const msg = document.getElementById("mensagemEnviada")

form.addEventListener("submit", function(e){
  e.preventDefault()

  if(document.getElementById("nome") && document.getElementById("email") && document.getElementById("mensagem")){
    msg.style.display = "block"
    form.reset()
  }else{
    alert("Preencha todos os campos!")
  }
})
