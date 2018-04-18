$(document).ready(function() {
    var submitIcon = $('.searchbox-icon');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var isOpen = false;
    submitIcon.click(function() {
        if (isOpen == false) {
            searchBox.addClass('searchbox-open');
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.removeClass('searchbox-open');
            inputBox.focusout();
            isOpen = false;
        }
    });
    submitIcon.mouseup(function() {
        return false;
    });
    searchBox.mouseup(function() {
        return false;
    });
    $(document).mouseup(function() {
        if (isOpen == true) {
            $('.searchbox-icon').css('display', 'block');
            submitIcon.click();
        }
    });
});

function buttonUp() {
    var inputVal = $('.searchbox-input').val();
    inputVal = $.trim(inputVal).length;
    if (inputVal !== 0) {
        $('.searchbox-icon').css('display', 'none');
    } else {
        $('.searchbox-input').val('');
        $('.searchbox-icon').css('display', 'block');
    }
}





$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});


//thumbnails//

$('.thumbnail').hover(
    function() {
        $(this).find('.caption').addClass('open-caption'); //.fadeIn(250)
    },
    function() {
        $(this).find('.caption').removeClass('open-caption'); //.fadeOut(205)
    }
);


var bannerStatus = 1;
var bannerTimmer = 1000;

window.onload = function() {
    bannerLoop();
}

var startBannerLoop = setInterval(function() {
    bannerLoop();
}, bannerTimmer);

document.getElementById("main-banner").onmouseenter = function() {
    clearInterval(startBannerLoop);
}
document.getElementById("main-banner").onmouseleave = function() {
    startBannerLoop = setInterval(function() {
        bannerLoop();
    }, bannerTimmer);
}


function bannerLoop() {
    if (bannerStatus === 1) {

        document.getElementById("imgban2").style.opacity = "0";
        setTimeout(function() {
            document.getElementById("imgban1").style.right = "0px";
            document.getElementById("imgban1").style.zIndex = "1000";
            document.getElementById("imgban2").style.right = "-1200px";
            document.getElementById("imgban2").style.zIndex = "1500";
            document.getElementById("imgban3").style.right = "1200px";
            document.getElementById("imgban3").style.zIndex = "500";

        }, 500);

        setTimeout(function() {
            document.getElementById("imgban2").style.opacity = "1";
        }, 1000);
        bannerStatus = 2;
    } else if (bannerStatus === 2) {

        document.getElementById("imgban3").style.opacity = "0";
        setTimeout(function() {
            document.getElementById("imgban2").style.right = "0px";
            document.getElementById("imgban2").style.zIndex = "1000";
            document.getElementById("imgban3").style.right = "-1200px";
            document.getElementById("imgban3").style.zIndex = "1500";
            document.getElementById("imgban1").style.right = "1200px";
            document.getElementById("imgban1").style.zIndex = "500";
        }, 500);

        setTimeout(function() {
            document.getElementById("imgban3").style.opacity = "1";
        }, 1000);
        bannerStatus = 3;
    } else if (bannerStatus === 3) {

        document.getElementById("imgban1").style.opacity = "0";
        setTimeout(function() {
            document.getElementById("imgban3").style.right = "0px";
            document.getElementById("imgban3").style.zIndex = "1000";
            document.getElementById("imgban1").style.right = "-1200px";
            document.getElementById("imgban1").style.zIndex = "1500";
            document.getElementById("imgban2").style.right = "1200px";
            document.getElementById("imgban2").style.zIndex = "500";
        }, 500);

        setTimeout(function() {
            document.getElementById("imgban1").style.opacity = "1";
        }, 1000);
        bannerStatus = 1;
    }
}

window.sr = ScrollReveal();
sr.reveal('.thumbnail', {
    duration: 2000
})
sr.reveal('.also', {
    duration: 3000
})

Draggable.create("#table", { type: "scroll", edgeResistance: 0.5, throwProps: true });