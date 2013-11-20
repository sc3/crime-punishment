// My code

$(document).ready(function() { 

    $('#call-info').hide()
    $('#toCallInfo').click(function() {
        $('#main').toggle('slide', function() {
            $('#call-info').toggle('slide');
        });
    });
    $('#toCall').click(function() {
        $('#call-info').toggle('slide', function() {
            $('#main').toggle('slide');
            $('#police').animate()
        });
    });
});