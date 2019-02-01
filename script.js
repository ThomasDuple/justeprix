$(document).ready(function() {
  var price = (Math.floor(Math.random() * (50000 - 10000 + 1)) + 10000);
  console.log("Salut jeune tricheur !");
  console.log("Le juste prix est de",price,"€");

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
      console.log("Plus que " + prop);
    };
    if (prop > price) {
      $("#proptxt").text("que " + prop);
      $("#minus").show();
      $("#plus").hide();
      console.log("Moins que " + prop);
    };
    if (prop == price) {
      $("#b1").hide();
      $("#b2").show();
      console.log("C'est " + prop);
    };
  });

  $('#again').on('click', function() {
    location.reload();
  })
});
