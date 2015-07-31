// THIS FILE HAS A LOT OF JQUERY NOTES

$(document).on('ready', function() {

  var heading = $("#first-heading");
  console.log(heading);

  heading.append("hi");

//to grab the indicated element at the indicsted position on the page, 2nd of all p elements
//:nth-child() - Selects all elements that are the nth-child of their parent.

  var test = $(".container p:nth-of-type(2)").append("&nbsp;<span>Whatever</span>");

//treats indicated element as an array, so targets the second index of p elements that are in an array
//:eq() - Select the element at index n within the matched set.

  var test2 = $('p:eq(3)').append("&nbsp;<span>Kewl</span>");

//removes heading
  // heading.remove();

//empties heading area
  // heading.empty();

//clones all elements and then you can prepend or append, goo if creating same sort of object
  var target = $("#delegate");
  var testClone = target.clone();
  console.log(testClone);

//targeting main button and adding event handler of click
  $("#minor-btn").on("click", function(event){
    console.log("is this working?");
    console.log(this);
  });

//grabs all buttons
  $("button").on("click", function(event){
    console.log("is this working too?");
    console.log(this);
  });

//grabs just the button you are clicking/object at hand
  $("button").on("click", function(event){
    console.log("is this working also?");
    console.log(this);
    // $(this).remove();
  });

//getter - get stuff from the DOM
  $("button").on("click", function(event){
    console.log($(this).text());
  });

//setter - change stuff on the DOM
  $("button").on("click", function(event){
    console.log($(this).text('change it'));
  });

//polymorphism - changes functionalisty, allows you to pass in multiple arguments to do multiple things
//getting background, setting it to red = polymorphism
  $("button").on("click", function(event){
    console.log($(this).css('background', 'red'));
  });

//gets all sublings
  $("button").on("click", function(event){
    console.log($(this).siblings());
  });

//closest - in then back up, get all children, if not children, goes out to ancestors, does it look at siblings?? find out
  $("button").on("click", function(event){
    console.log($(this).closest('container').find('h1'));
  });

//EVENT DELEGATION
//target a container and go in from there
  $('#delegate').on('click', '#minor-btn', function(){
      $('#delegate').append("<p>yo</p>");
    });

    $(document).on('click', 'p', function(){
      console.log('test');
      // $(this).remove();
    });

});
