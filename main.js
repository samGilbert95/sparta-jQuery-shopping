$(document).ready(function(){
  // Your code here


// Need array for each shoppingList
// when button pressed, get value from button and get list.
// add new element to the list.
// add doubleclick to remove from list.
//

// Testing Variables
$('#addToList').click('submit',(e) => {
  console.log($('#selectShop').val());
  let check = $('#addToList')[0].value;
  console.log(check);
  switch ($('#selectShop').val()) {
    case 'shop_1':
    $('.shoppingList1').append(`<li class="list-item">${check}</li>`);
    e.preventDefault();
    break;
    case 'shop_2':
    $('.shoppingList2').append(`<li class="list-item">${check}</li>`);
    e.preventDefault();
    break;
    case 'shop_3':
    $('.shoppingList3').append(`<li class="list-item">${check}</li>`);
    e.preventDefault();
    break;
    case 'shop_4':
    $('.shoppingList4').append(`<li class="list-item">${check}</li>`);
    e.preventDefault();
    break;
    default:
    break;
  }
});
});
  // EVENT BUBBLING
