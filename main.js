function getParagraph1()
{
    var input = [];
    for(var i = 1 ; i>=6 ; i++)
{
        input.push(document.getElementById("para1_input_box_" + i).value);
}
    input.join(".");
    document.getElementById("showParagraph1").innerHTML = input.join(".");
}