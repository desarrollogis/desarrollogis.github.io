
jQuery(document).ready(function($) {
    $("table.matrix input").click(function() {
        var result = "";

        $("table.matrix input").each(function(index, element) {
            if ((index % 8) == 0) {
                result = result + ",B";
            }
            result = result + ($(element).is(":checked") ? "1" : "0");
        });
        $("span.result").text(result);
    }).get(0).click();
});
