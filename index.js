var item = 0

jQuery(function(){
    $('#btn').on("click", function () {
        item += 1;
        var hrs = $('.hrsinput').val();
        var dbls = $('.dblsinput').val();
        var name = $('.nameinput').val();
        $('.bloonlist').append('<li id="item'+Number(dbls)/Number(hrs)+'" data-position='+Number(dbls)/Number(hrs)+'>'+Number(dbls)/Number(hrs)+" doubloons per hour on "+name+'</li>');
        $('<li data-position='+Number(dbls)/Number(hrs)+'>').append('<<button type="button" class="deletebutton">Delete</button>')
        $(".bloonlist li").sort(sort_li).appendTo('.bloonlist');
        function sort_li(a, b) {
        return ($(b).data('position')) < ($(a).data('position')) ? -1 : 1;
    }
    });
    $('#deletebutton').on("click", function () {
        var deletevalue = $('.deleteinput').val();
        $('#item'+deletevalue).remove();
    });
});
