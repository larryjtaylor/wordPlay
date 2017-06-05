$(function(){
  $(".formStuff").submit(function(event){
      event.preventDefault();
    var string = $("input#words").val();
    var splitString = string.split(" ");
    console.log(splitString);

    if (#words.length >= 3) {
      result(splitString);
    }
  });
});
