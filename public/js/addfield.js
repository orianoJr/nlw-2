// Procurar o botão
document.querySelector("#add-time")
//guando clicar no botão
.addEventListener("click", cloneField)

//Executar uma ação
function cloneField(){
  //duplicar os campos
  const neoFields = document.querySelector(".schedule-item").cloneNode(true)

  //PEGAR CAMPOS. QUE CAMPOS?
  const fields = neoFields.querySelectorAll("input")
  //para cada campo limpo
  fields.forEach(function(field) {
    field.value=""    
  });
  //colocar aonde ?
  document.querySelector('#schedule-items').appendChild(neoFields)
}