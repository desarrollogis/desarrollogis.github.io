
function getStorage() {
    var ledMatrix = localStorage.getItem("ledMatrix");

    try {
        ledMatrix = JSON.parse(ledMatrix);
    }
    catch (e) {
    }
    if ((typeof(ledMatrix) != "object") || (ledMatrix == null)) {
        ledMatrix = {};
    }
    if (typeof(ledMatrix["chars"]) != "object") {
        ledMatrix["chars"] = {};
    }
    return ledMatrix;
}

function setStorage(ledMatrix) {
    var chars = ledMatrix["chars"];
    var keys = [];
    var newChars = {};

    for (i in chars) {
        if (chars.hasOwnProperty(i)) {
            keys.push(i);
        }
    }
    keys.sort();
    $.each(keys, function(index, element) {
        newChars[element] = chars[element];
    });
    ledMatrix["chars"] = newChars;
    ledMatrix = JSON.stringify(ledMatrix);
    localStorage.setItem("ledMatrix", ledMatrix);
}

function updateChars() {
    var ledMatrix = getStorage();
    var i = 1;

    $("table.results tr:gt(0)").remove();
    $.each(ledMatrix["chars"], function(index, element) {
        var tr = $("table.results tr:nth-child(" + ++i + ")");

        if (tr.length < 1) {
            tr = $("<tr>");
            $(tr).append("<td>").data("index", index).click(function() {
                var index = $(this).data("index");
                var result = ledMatrix["chars"][index]["result"];
                var size = ledMatrix["chars"][index]["size"];
                var j = 0, n = result.length, k = -1;

                for (j = 0; j < n; ++j) {
                    if (result[j] == "0") {
                        $("table.matrix input").eq(++k).prop("checked", false);
                    }
                    else if (result[j] == "1") {
                        $("table.matrix input").eq(++k).prop("checked", true);
                    }
                }
                $("input.char").val(index);
                $("input.size").val(size);
            });
            $("table.results").append(tr);
        }
        $(tr).find("td").text("'" + index + "', " + element["result"] + "," + element["size"] + ",");
    });
}

function onStore(me) {
    var aChar = $("input.char").val();

    if (aChar.length != 1) {
        alert("specify a char");
        return;
    }

    var size = $("input.size").val();
    var result = $("input.result").val();
    var ledMatrix = getStorage();

    size = parseInt(size);
    if (isNaN(size)) {
        size = 8;
    }
    $("input.size").val(size);
    ledMatrix["chars"][aChar] = { "result": result, "size": size };
    setStorage(ledMatrix);
    updateChars();
}

function onDelete(me) {
    var aChar = $("input.char").val();

    if (aChar.length < 1) {
        alert("specify a char");
        return;
    }

    var ledMatrix = getStorage();

    delete ledMatrix["chars"][aChar];
    setStorage(ledMatrix);
    updateChars();
}

jQuery(document).ready(function($) {
    updateChars();
    $("table.matrix input").click(function() {
        var result = "";
        var separator = "B";

        $("table.matrix input").each(function(index, element) {
            if ((index % 8) == 0) {
                result = result + separator;
                separator = ",B";
            }
            result = result + ($(element).is(":checked") ? "1" : "0");
        });
        $("input.result").val(result);
    });
});
