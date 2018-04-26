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

//END SEARCHBAR//



$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
//END TOOLTIPS//


//thumbnails//

$('.thumbnail').hover(
    function() {
        $(this).find('.caption').addClass('open-caption'); //.fadeIn(250)
    },
    function() {
        $(this).find('.caption').removeClass('open-caption'); //.fadeOut(205)
    }
);

$('#img-wrapper').hover(
    function() {
        $(this).find('.caption2').addClass('open-caption2'); //.fadeIn(250)
    },
    function() {
        $(this).find('.caption2').removeClass('open-caption2'); //.fadeOut(205)
    }
);



var imgWrapper = $("#img-wrapper"),
    images = $(".rotating-img"),
    tl = new TimelineMax({ repeat: -1 });

TweenLite.set(imgWrapper, { perspective: 500 });
TweenLite.set(images, { rotationY: 180 });
TweenLite.set(images[0], { rotationY: 0 });

for (var i = 0; i < images.length; i++) {
    var nextImage = (i + 1) == images.length ? images[0] : images[i + 1];
    tl
        .to(images[i], 2, { rotationY: '-180_ccw' }, (2 * i))
        .to(nextImage, 2, { rotationY: '0_ccw' }, (2 * i));

    $(".rotating-img").hover(function() {
        tl.stop()
        TweenLite.to($(this).find(".nextImage"), 0.2, { scale: 1.4 })
    }, function() {
        TweenLite.to($(this).find(".nextimage"), 0.2, { scale: 1 })
        tl.resume()
    })

}

//END THUMBNAILS//

//Banner//

var bannerStatus = 1;
var bannerTimmer = 3000;

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
        }, 3000);
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
        }, 3000);
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
        }, 3000);
        bannerStatus = 1;
    }
}


//scroll reveal//
window.sr = ScrollReveal();
sr.reveal('.thumbnail', {
    duration: 2000
})
sr.reveal('.opa', {
    duration: 3000
})


//greensock drag//
Draggable.create("#table", { type: "scroll", edgeResistance: 0.5, throwProps: true });

//greensock drag en//




//HEADING TAG//
var str = "<p>CHECK SOME OTHER SERVICES!</p>",
    i = 0,
    isTag,
    text;

(function type() {
    text = str.slice(0, ++i);
    if (text === str) return;

    document.getElementById('otherServ').innerHTML = text;

    var char = text.slice(-1);
    if (char === '<') isTag = true;
    if (char === '>') isTag = false;

    if (isTag) return type();
    setTimeout(type, 500);
}());


// Set the date we're counting down to
var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "<br>DAYS";
    document.getElementById("demo2").innerHTML = hours + "<br>HOURS";
    document.getElementById("demo3").innerHTML = minutes + "<br>MINS ";
    document.getElementById("demo1").innerHTML = days + "<br>DAYS";
    document.getElementById("demo22").innerHTML = hours + "<br>HOURS";
    document.getElementById("demo33").innerHTML = minutes + "<br>MINS ";

    document.getElementById("dem").innerHTML = days + "<br>DAYS";
    document.getElementById("dem3").innerHTML = hours + "<br>HOURS";
    document.getElementById("dem4").innerHTML = minutes + "<br>MINS ";



    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("expired").innerHTML = "EXPIRED";
    }
}, 1000);




// hover over

function myMap() {
    google.maps.event.addDomListener(document.getElementById('3'), 'click', function() {

        map.setCenter(new google.maps.LatLng(10.23, 123.45));
    });
    google.maps.event.addDomListener(document.getElementById('2'), 'click', function() {

        map.setCenter(new google.maps.LatLng(11.23, 122.45));
    });
    google.maps.event.addDomListener(document.getElementById('1'), 'click', function() {

        map.setCenter(new google.maps.LatLng(55.23, 78.45));
    });
    google.maps.event.addDomListener(document.getElementById('33'), 'click', function() {

        map.setCenter(new google.maps.LatLng(10.23, 123.45));
    });
    google.maps.event.addDomListener(document.getElementById('22'), 'click', function() {

        map.setCenter(new google.maps.LatLng(11.23, 122.45));
    });
    google.maps.event.addDomListener(document.getElementById('11'), 'click', function() {

        map.setCenter(new google.maps.LatLng(55.23, 78.45));
    });


    var mapOptions = {
        center: new google.maps.LatLng(39.9, 116.3),

        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}