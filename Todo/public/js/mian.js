$('#myModal').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget)
    var recipient = button.data('itemid');
    var modal = $(this)
    var data = button.closest("li").find('h5').text()

    modal.find('form').attr('action', '/edit/' + recipient)

    modal.find('.modal-body input').val(data)
})

$('h5').css({
    'color': "#" + Math.floor(Math.random() * 1677215).toString(16),

})
var length = $('.list-group-item.finished').length
var length1 = $('.list-group-item.jj').length
$('.panel-footer span:eq(1)').html('<mark>' + '完成' + length + '项' + '</mark>');
$('.panel-footer span:eq(2)').html('<mark>' + '未完成' + length1 + '项' + '</mark>');