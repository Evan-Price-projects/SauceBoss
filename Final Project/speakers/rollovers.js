	$(document).ready(function() {
    $("#image_rollovers img").each(function() {
        // get the src attribute
        var oldURL = $(this).attr("src");
        // get the id attribute
        var newURL = $(this).attr("id");
        var rolloverImage = new Image();
        rolloverImage.src = newURL;
        $(this).hover(
            function() {
                // set the src attribute
                $(this).attr("src", newURL);
            },
            function() {
                // set the src attribute
                $(this).attr("src", oldURL);
            }
        );  // end hover
    }); // end each
}); // end ready
