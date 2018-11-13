$(function() {
    $('[data-toggle="popover"]').popover();
});

setTimeout(() => {
    $('.out .alert').alert('close')
}, 3000);
$('[data-toggle="popover"]').hover(
    function() {
        $(this).popover('show')
    },
    function() {
        $(this).popover('hide')
    }
)
$(function() {
    $('[data-toggle="popover"]').popover();
});

$(".comment .media").hover(
    function() {
        $(this)
            .find(".delete")
            .show();
    },
    function() {
        $(this)
            .find(".delete")
            .hide();
    }
);