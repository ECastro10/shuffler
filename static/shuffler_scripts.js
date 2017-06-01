/**
 * Created by emanuel on 5/31/17.
 */

function addToList(){
    var item = $('#input_area').val();

    $('#notifier').html("Added that shit!");
    $('#notifier').fadeIn(700);
    $('#notifier').fadeOut(500);

    $('#malleable_list').append('<li>' + item + '</li>');
    $('#input_area').val("");
}

function shuffleThatShit(){
    var itemsToShuffle = $('malleable_list');

    console.log(itemsToShuffle[0])
}