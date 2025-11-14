$(function(){

$('#change-color').on('click', function(){
$('#target').css('color','red');
});

$('#change-text').on('click', function(){
  $('#target').text('Hello!');
});

//id属性がfadeOutの要素がクリックされたら
  $('#fade-out').on('click', function() {
    //フェードアウトする
    $('#target').fadeOut();
  });
//fede-inがクリックされたら
  $('#fade-in').on('click', function() {
    //フェードインする
    $('#target').fadeIn();
  });
});