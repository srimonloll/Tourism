$(".clear").hide();

var defaultpics= ["https://i.pinimg.com/564x/98/ee/f3/98eef3e793997bed63a25bc718add221.jpg","https://i.pinimg.com/564x/01/f9/e5/01f9e5e86c5d872527b850c594b1a536.jpg","https://i.pinimg.com/564x/86/9a/0d/869a0d6badfacfbc4fd2f923eeb5d3d7.jpg"];
var captions =["Spain", "Switzerland", "Iceland"];

$.each(defaultpics, function(index, value) {
    $(".gal").append("<div class='imgs'><img src='" + value + "'>" + "<figcaption>" + captions[index] + "</figcaption></div>");
        }); 

$(".add").click(function() {
    var p1 = $(".picture-url").val();
    var p2 = $(".newcaption").val();
    defaultpics.push(p1);
    captions.push(p2);
    
$(".gal").append("<div class='imgs'><img src='" + p1 + "'>" + "<figcaption>" + p2 + "</figcaption></div>");
$(".lol").text(defaultpics.length);
    $(".clear").show();
    if (p1 === "" || p2 === "") {
         alert("ERROR. Try again.");
    }
    $('.picture-url, .newcaption').val('');
});

$(".clear").click(function() {
    defaultpics.pop();
    $(".gallery .imgs:last-child").remove();
    $(".lol").text(defaultpics.length);
});

