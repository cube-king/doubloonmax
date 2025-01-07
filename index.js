jQuery(function(){
    var item = 0;
    var total = 0;

    $('#btn').on("click", function () {
    
        var hrs = $('.hrsinput').val();
        var dbls = $('.dblsinput').val();
        var name = $('.nameinput').val();
        var goal = $('.goalinput').val();
        var totaldblhr = 0;
        var average = 0;
        if (hrs > 0 && dbls > 0) {
            item += 1;
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

            // Recalc totaldblhr by iterating through and adding all `data-position` attributes
            $(".bloonlist li").each(function() {
                totaldblhr += Number($(this).data('position'));
            });

            console.log("Total dbls per hr:", totaldblhr);
            console.log("Total dbls:", total);

            // Calculate and log the average
            if (item > 0) {
                average = totaldblhr / item;
                console.log("Average:", average);
            }

            // Sorting function
            function sort_li(a, b) {
                return ($(b).data('position')) < ($(a).data('position')) ? -1 : 1;
            }
            if (goal <= total && !(goal).isNaN && !(total).isNan && goal > 0) {
                $('.rain').css('opacity', '1');
                $('.blahaj').css('opacity', '1');
            }
            else {
                $('.rain').css('opacity', '0');
                $('.blahaj').css('opacity', '0');
            }
            $(".totaldbls").text("Total doubloons: "+total.toFixed(2))
            $(".avgdblsperhr").text("Average doubloons per hour: "+average.toFixed(2))
            if (goal > 0 && !goal.isNaN) {
                if (Boolean((goal - total)/average > 0)) {
                    $(".hrsuntilgoal").text("Hours until goal: "+((goal - total)/average).toFixed(2))
                }
                else {
                    $(".hrsuntilgoal").text("Goal completed!")
                }
            }
            else {
                $(".hrsuntilgoal").text("Hours until goal (placeholder)!")
            }
        }
    });

    $('#deletebutton').on("click", function () {
        if (total > 0) {
            var dblsinquestion = $('#item' + item).attr("data-dblsprhr");
            var goal = $('.goalinput').val();
            total -= Number(dblsinquestion);
            $('#item' + item).remove();
            item -= 1;
            console.log(total);
            if (goal <= total && !(goal).isNaN && !(total).isNan && goal > 0) {
                $('.rain').css('opacity', '1');
                $('.blahaj').css('opacity', '1');
            }
            else {
                $('.rain').css('opacity', '0');
                $('.blahaj').css('opacity', '0');
            }
            $(".totaldbls").text("Total doubloons: "+total.toFixed(2))
            $(".avgdblsperhr").text("Average doubloons per hour: "+average.toFixed(2))
            if (goal > 0 && !goal.isNaN) {
                if (Boolean((goal - total)/average > 0)) {
                    $(".hrsuntilgoal").text("Hours until goal: "+((goal - total)/average).toFixed(2))
                }
                else {
                    $(".hrsuntilgoal").text("Goal completed!")
                }
            }
            else {
                $(".hrsuntilgoal").text("Hours until goal (placeholder)!")
            }
        }
    });

    $('.ship').on("click", function () {
        
    });
});
