$(document).ready(function() {
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        alert('Thank you for contacting me, ' + $('input[name="name"]').val() + '!');
        $(this).trigger('reset');
    });
});
