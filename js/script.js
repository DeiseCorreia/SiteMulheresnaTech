
document.getElementById("Botaoenviar").addEventListener("click",validarFormulario )


function validarFormulario(){

  if(document.getElementById("nome").value != "" &&             document.getElementById("email").value != "" && document.getElementById("telefone").value != ""){

    alert("Pronto! Você receberá mais novidades pelo e-mail :)!")

  }else{

    alert("Falta um campo á ser preenchido!")

  }
}
