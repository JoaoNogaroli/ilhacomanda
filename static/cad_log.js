var database = firebase.database()

var cad_nome = document.getElementById("cad_nome_restaurante")
var cad_email = document.getElementById("cad_email_restaurante")
var cad_senha = document.getElementById("cad_senha_restaurante")

var log_email = document.getElementById("log_email_restaurante")
var log_senha = document.getElementById("log_senha_restaurante")


function cadastrar(){
    console.log("cadastrar")
    firebase.auth().createUserWithEmailAndPassword(cad_email.value, cad_senha.value)
    .then((user) => {
        // Signed in
        window.alert("LOGADO: " + cad_email.value)
        var userUid = firebase.auth().currentUser.uid;
        var items = [];
        for (var i = 10000; i <= 99999; i++) {
            items.push(i);
        }
        cod = items[Math.floor(Math.random() * items.length)];
        database.ref('Restaurantes').child(userUid).set({
          'EmailRestaurante': cad_email.value,
          'userUid': userUid,        
          'NomeRestaurante': cad_nome.value,
          'Cod': cod,
        })
        document.getElementById("cad_sucesso").innerHTML = "Cadastrado com sucesso: " + cad_email.value + "<br>" + " Faça seu Login";
        document.getElementById("cad_nome_restaurante").innerHTML = "";
        document.getElementById("cad_email_restaurante").innerHTML = "";
        document.getElementById("cad_senha_restaurante").innerHTML = "";
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert(errorMessage)

        // ..
    });
}

function logar(){
    firebase.auth().signInWithEmailAndPassword(log_email.value, log_senha.value)
        .then((user) => {
            // Signed in
            // ...
            window.alert("LOGADO: " + log_email.value)
            //TESTE
            //window.location.href = "http://127.0.0.1:5000/logado"
            // PRODUCAÇÂo
            window.location.href = "https://ilhacomanda.herokuapp.com/logado"
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert(errorMessage)

        });
}