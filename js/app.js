$(document).ready(function() {


//On Enter Add new

  $("#item").keypress(function (e) {
  if (e.which == 13) {
    var todo = $(this).val();
    $(".todo_list").append('<div class="todo">' + todo + '<a href="#" class="delete_todo"><span class="glyphicon glyphicon-trash trash"> </span></a>' + '<a href="#" class="done_todo"><span class="glyphicon glyphicon-ok"><span></a></div>');
    $(this).val("");
  }
});


//Delete Item

$(".items").on("click",".delete_todo", function(e){
    e.preventDefault();
    $(this).parent('div').remove();
});


$(".items").on("click",".done_todo", function(e) {
    e.preventDefault();
    $(this).parent('div').wrap("<strike>");
  });
// $('.done').change(function() {
//         if($(this).is(":checked")) {
//             $(this).parent('div').addClass("check");
//         }
//     });



});
