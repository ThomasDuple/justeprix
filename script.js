// On en parle pas ok ?

$(document).ready(function() {
  var price = (Math.floor(Math.random() * (50000 - 10000 + 1)) + 10000);
  console.log("Salut jeune tricheur !");
  console.log(("%cLe juste prix est de " + price + " €"), 'background-color: #2c2; color: #fff;');

  $('#plus,#minus,#proptxt,#b2').hide();
  console.log("Élements cachés");


  $('#try').on('click', function() {
    console.log("Bouton enclenché");
    var prop = document.getElementById('test').value;
    document.getElementById('test').value = '';
    document.getElementById("test").focus();
    $("#proptxt").show();
    $("#prompt").hide();
    if (prop < price) {
      $("#proptxt").text("que " + prop);
      $("#plus").show();
      $("#minus").hide();
      console.log("%cPlus que " + prop, 'background-color: #22c; color: #fff;');
    };
    if (prop > price) {
      $("#proptxt").text("que " + prop);
      $("#minus").show();
      $("#plus").hide();
      console.log("%cMoins que " + prop, 'background-color: #c22; color: #fff;');
    };
    if (prop == price) {
      $("#b1").hide();
      $("#b2").show();
      console.log("%cC'est " + prop, 'background-color: #2c2; color: #fff;');
    };
  });

  $('#again').on('click', function() {
    location.reload();
  })
});
