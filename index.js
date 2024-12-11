jQuery(function(){
    var item = 0;
    var total = 0;

    $('#btn').on("click", function () {
        item += 1;
        var hrs = $('.hrsinput').val();
        var dbls = $('.dblsinput').val();
        var name = $('.nameinput').val();
        var totaldblhr = 0;
        var average = 0;

        // Increment the total of doublons
        total += Number(dbls);

        // Append the new list item
        $('.bloonlist').append(
            '<li class="listitem" id="item' + Number(item) +
            '" data-dblsprhr="' + Number(dbls) +
            '" data-position="' + (Number(dbls) / Number(hrs)).toFixed(2) +
            '">' + (Number(dbls) / Number(hrs)).toFixed(2) + 
            " doubloons per hour on " + name + '</li>'
        );

        // Sort the list items
        $(".bloonlist li").sort(sort_li).appendTo('.bloonlist');

        // Recalculate totaldblhr by iterating through and adding all `data-position` attributes
        $(".bloonlist li").each(function() {
            totaldblhr += Number($(this).data('position'));
        });

        console.log("Total dbls per hr:", totaldblhr);

        // Calculate and log the average
        if (item > 0) {
            average = totaldblhr / item;
            console.log("Average:", average);
        }

        // Sorting function
        function sort_li(a, b) {
            return ($(b).data('position')) < ($(a).data('position')) ? -1 : 1;
        }
    });

    $('#deletebutton').on("click", function () {
        var dblsinquestion = $('#item' + item).attr("data-dblsprhr");
        total -= Number(dblsinquestion);
        $('#item' + item).remove();
        item -= 1;

        console.log(total);
    });
});
