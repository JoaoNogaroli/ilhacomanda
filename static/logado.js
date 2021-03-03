var database = firebase.database();

firebase.auth().onAuthStateChanged(function(user) {

    if (user) {
      var usuario = firebase.auth().currentUser;

      user_uid = firebase.auth().currentUser.uid;
      
      //document.getElementById("email_logado").innerHTML = usuario.email; 
      //document.getElementById("user_uid_dois").innerHTML = firebase.auth().currentUser.uid; 

   
      database.ref("Restaurantes").child(user_uid).on('value', function(snapshot){
        console.log("TESTE: " + snapshot.val().NomeRestaurante)
        document.getElementById("nome").innerHTML = snapshot.val().NomeRestaurante;
      });
      // User is signed in.
      database.ref('Restaurantes').child(user_uid).child('Mesas').on('value', function (snapshot){
        snapshot.forEach(function(data) { 
          console.log(data.val())
          var nome_mesa = data.val().NomeMesa
          div_input_meio = document.getElementById("input_meio");
          var div_input = document.createElement("INPUT");
          var div_label = document.createElement('label');
          div_input.setAttribute("type", "radio");
          div_input.setAttribute("name", 'btn_input_radio');
          div_input.setAttribute("id",'btn_input_radio');
          div_input.setAttribute("value", nome_mesa);
          div_label.innerHTML = nome_mesa;
          var br = document.createElement('br');
          div_input_meio.appendChild(div_input);
          div_input_meio.appendChild(div_label);
          div_input_meio.appendChild(br);

        });
      });

    } else {
      // No user is signed in.
    }
  });

  function mesa(){
      //var aparecer =  document.getElementById("btn_radio_mesa_ver");
      //aparecer.style.display = "block";
      console.log("MESA")
      var num_mesa = document.getElementById('num_mesa');
      var text_mesa = document.getElementById('texto_mesa');
      div_meio = document.getElementById("input_meio");

      var div_input = document.createElement("INPUT");
      var div_label = document.createElement('label');
      div_input.setAttribute("type", "radio");
      div_input.setAttribute("name", 'btn_radio');
      div_input.setAttribute("id",'btn_radio');
      div_input.setAttribute("value", text_mesa.value+" "+num_mesa.value);
      div_input.className, div_label.className = "valores";


      div_label.innerHTML = text_mesa.value+" "+num_mesa.value;

      var br = document.createElement('br');

      div_meio.appendChild(div_input);
      div_meio.appendChild(div_label);
      div_meio.appendChild(br);

      var items = [];
      for (var i = 10000; i <= 99999; i++) {
          items.push(i);
      }
      cod = items[Math.floor(Math.random() * items.length)];
      var user_uid = firebase.auth().currentUser.uid;
      
      database.ref('Restaurantes').child(user_uid).child('Mesas').child(num_mesa.value).set({
        'Mesa_num': cod,
        'NomeMesa': text_mesa.value+" "+num_mesa.value,
      });
         
        
      window.location.reload();

      
  }

function ver(){
  var radios = document.getElementsByName("btn_input_radio");
  for (var radio of radios) {
    if (radio.checked) {
      var radio_formated = radio.value.charAt(0).toUpperCase() + radio.value.slice(1);
      console.log(radio_formated);

      /*database.ref('Restaurantes').child(user_uid).child('Mesas').child(num_mesa.value).on('value', function (snapshot){
        console.log("Código: "+snapshot.val().Mesa_num)
        console.log("NomeMesa: "+snapshot.val().NomeMesa)

      });**/
      /*database.ref('Users').child(user_uid).child('Pesquisa').child('Lista_resultados').on('value', function(snapshot){
        snapshot.forEach(function(data) {  
        });
      }); */

    }
  } 
}