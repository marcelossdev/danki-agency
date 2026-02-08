//MENU MOBILE

$('nav.mobile h3').click(function(){
	$('nav.mobile').find('ul').slideToggle();
});


//SISTEMA DE SCROLL

$('nav a').click(function(){
	var href = $(this).attr('href');
	var offSetTop = $(href).offset().top;

	$('html,body').animate({'scrollTop':offSetTop});

	return false;
});


  /*VALIDAÇÃO DOS FORMULÁRIOS*/

$(document).click(function(event) {
    if (!$(event.target).closest('#formulario1').length){
        $("#email-error").hide();
        $("#mensagem-sucesso").hide();
    }
});

// Resetar mensagens de erro e sucesso ao clicar fora do formulário 2
$(document).click(function(event) {
    if (!$(event.target).closest('#formulario2').length){
        $("#nome-error, #email2-error, #telefone-error, #mensagem-error").text("");
        $("#mensagem-sucesso2").hide();
    }
});


// Resetar mensagens de erro e sucesso ao clicar fora do formulário 3
$(document).click(function(event) {
    if (!$(event.target).closest('#formulario3').length){
        $("#email3-error").text("");
        $("#mensagem-sucesso3").hide();
    }
});

$("#formulario1").submit(function(event){
    // Resetando as mensagens de erro
    $("#email-error").hide();
    $("#mensagem-sucesso").hide();

    let isValid = true;

    
// Verificando o campo email, aplicando a mesma lógica do exemplo acima com val e o trim
  if($("#email").val().trim() === ""){
    $("#email-error").text("Por favor, preencha seu e-mail.").show();
    isValid = false;

  } else {
    // Separando o email em duas partes: parte antes do "@" e parte após o "@" utilizando o (split(@))
    let parts = $("#email").val().split("@");

/*Verificando se há pelo menos um caractere antes do "@" (parts[0].length < 1) e se o domínio é "@hotmail.com" ou "@gmail.com"
parts[1] === "hotmail.com" || parts[1] === "gmail.com"*/
    if (parts[0].length < 1 || !(parts[1] === "hotmail.com" || parts[1] === "gmail.com")) {
        $("#email-error").text("Por favor, insira um e-mail válido com '@gmail.com' ou '@hotmail.com'.").show();
        isValid = false;
    }
}


    if (isValid) {
        $("#mensagem-sucesso").css("display", "inline-block").show();
        setTimeout(function() {
            location.reload();
        }, 1500); // 5000 milissegundos = 5 segundos
    }

    return false;

});


$("#formulario2").submit(function(event){
  // Resetando as mensagens de erro
  $("#nome-error, #email2-error, #telefone-error, #mensagem-error").text("");
  let isValid = true;

  // Verificando o campo nome
  if($("#nome").val().trim() === ""){
      $("#nome-error").text("Por favor, preencha seu nome.");
      isValid = false;
  } else if ($("#nome").val().trim().split(" ").length < 2){
      $("#nome-error").text("Por favor, preencha seu nome completo.");
      isValid = false;
  }

    // Verificando o campo email, aplicando a mesma lógica do exemplo acima com val e o trim
    if($("#email2").val().trim() === ""){
        $("#email2-error").text("Por favor, preencha seu e-mail.");
        isValid = false;
    
      } else {
        // Separando o email em duas partes: parte antes do "@" e parte após o "@" utilizando o (split(@))
        let parts = $("#email2").val().split("@");
    
    /*Verificando se há pelo menos um caractere antes do "@" (parts[0].length < 1) e se o domínio é "@hotmail.com" ou "@gmail.com"
    parts[1] === "hotmail.com" || parts[1] === "gmail.com"*/
        if (parts[0].length < 1 || !(parts[1] === "hotmail.com" || parts[1] === "gmail.com")) {
            $("#email2-error").text("Por favor, insira um e-mail válido com '@gmail.com' ou '@hotmail.com'.");
            isValid = false;
        }
    }
    

  // Verificando o campo telefone
  if ($("#telefone").val().trim() === "") {
      $("#telefone-error").text("Por favor, preencha seu telefone.");
      isValid = false;
  } else {
      var telefone = $("#telefone").val().trim().replace(/\D/g, ''); // Remove caracteres não numéricos
      if (telefone.length !== 11) {
          $("#telefone-error").text("Por favor, insira um telefone válido com DDD no formato (99) 99999-9999.");
          isValid = false;
      } else {
          // Formata o telefone para (99) 99999-9999
          telefone = "(" + telefone.substring(0, 2) + ") " + telefone.substring(2, 7) + "-" + telefone.substring(7);
          $("#telefone").val(telefone);
      }
  }

  $("#telefone").on('input', function() {
    var telefone = $(this).val().trim();
  
    // Remove todos os caracteres que não são números
    telefone = telefone.replace(/\D/g, '');
  
    // Limita o número de dígitos a 11
    if (telefone.length > 11) {
        telefone = telefone.substring(0, 11);
    }
  
    // Formatação do telefone
    if (telefone.length === 11) {
        telefone = "(" + telefone.substring(0, 2) + ") " + telefone.substring(2, 7) + "-" + telefone.substring(7);
    }
  
    // Atualiza o valor do campo com a formatação
    $(this).val(telefone);
  });

  // Verificando o campo mensagem
  if($("#mensagem").val().trim() === ""){
      $("#mensagem-error").text("Por favor, preencha sua mensagem.");
      isValid = false;
  }

  if (isValid) {
      $("#mensagem-sucesso2").show();
      setTimeout(function() {
          location.reload();
      }, 1500); // 1500 milissegundos = 1,5 segundos
  }

  return false;
});




$("#formulario3").submit(function(event){
    // Resetando as mensagens de erro
    $(".error").text("");
    $("#mensagem-sucesso3").hide();
  
    let isValid = true;

      // Verificando o campo email, aplicando a mesma lógica do exemplo acima com val e o trim
  if($("#email3").val().trim() === ""){
    $("#email3-error").text("Por favor, preencha seu e-mail.");
    isValid = false;

  } else {
    // Separando o email em duas partes: parte antes do "@" e parte após o "@" utilizando o (split(@))
    let parts = $("#email3").val().split("@");

/*Verificando se há pelo menos um caractere antes do "@" (parts[0].length < 1) e se o domínio é "@hotmail.com" ou "@gmail.com"
parts[1] === "hotmail.com" || parts[1] === "gmail.com"*/
    if (parts[0].length < 1 || !(parts[1] === "hotmail.com" || parts[1] === "gmail.com")) {
        $("#email3-error").text("Por favor, insira um e-mail válido com '@gmail.com' ou '@hotmail.com'.");
        isValid = false;
    }
}


    if (isValid) {
        $("#mensagem-sucesso3").show();
        setTimeout(function() {
            location.reload();
        }, 1500); // 1500 milissegundos = 1,5 segundos
    }
  
    return false;
  });
