export var customScript = function() {
    $('.bannerslider').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        mouseDrag: false,
        autoplay: true,
        animateOut: 'fadeout',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $(".testimonials_slider").owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        dots: false,
        autoplay: true,
        mouseDrag: true,
        responsiveClass: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            680: {
                items: 2,
                nav: false,
                loop: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
    var delay = 2000;
    var sliderRadios = document.getElementsByName("carousel-3d");
    var index = 0
    var imageCount = sliderRadios.length;

    setInterval(function() {
        index++;
        if (index > imageCount - 1) {
            index = 0;
        }
        $(sliderRadios[index]).prop("checked", true).trigger('change');
        //   console.log(sliderRadios[index].id);
    }, delay);
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50) {
            $(".header2").addClass("header_bg");
        } else {
            $(".header2").removeClass("header_bg");
        }
    });
    $(function() {
        $('#carousel-3d-controller-1').mouseover(function(e) {
            $('#itm_1').css({ 'background': '#f5c3c5', "border": "none" });
        });
        $("#carousel-3d-controller-1").mouseout(function() {
            $("#itm_1").css({ 'background': 'none', "border": "#FF5A61 solid 1px" });
        });
        $('#carousel-3d-controller-2').mouseover(function(e) {
            $('#itm_2').css({ 'background': '#f5c3c5', "border": "none" });
        });
        $("#carousel-3d-controller-2").mouseout(function() {
            $("#itm_2").css({ 'background': 'none', "border": "#FF5A61 solid 1px" });
        });
        $('#carousel-3d-controller-3').mouseover(function(e) {
            $('#itm_3').css({ 'background': '#f5c3c5', "border": "none" });
        });
        $("#carousel-3d-controller-3").mouseout(function() {
            $("#itm_3").css({ 'background': 'none', "border": "#FF5A61 solid 1px" });
        });
    })



    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }
    //     var lowerSlider = document.querySelector('#lower');
    // var upperSlider = document.querySelector('#upper');

    // var rangeColor = document.querySelector('#range-color');
    // upperSlider.oninput = function() {
    //    lowerVal = parseInt(lowerSlider.value);
    //    upperVal = parseInt(upperSlider.value);

    //    if (upperVal < lowerVal + 1) {
    //       lowerSlider.value = upperVal - 1;
    //       if (lowerVal == lowerSlider.min) {
    //          upperSlider.value = 1;
    //       }
    //    }
    //    rangeColor.style.marginLeft = (lowerSlider.value * 10) + '%';

    //    rangeColor.style.width = (upperSlider.value * 10) - (lowerSlider.value * 10) + '%';


    //    console.log('upper value: ' + upperSlider.value);
    // };

    // lowerSlider.oninput = function() {
    //    lowerVal = parseInt(lowerSlider.value);
    //    upperVal = parseInt(upperSlider.value);

    //    if (lowerVal > upperVal - 1) {
    //       upperSlider.value = lowerVal + 1;

    //       if (upperVal == upperSlider.max) {
    //          lowerSlider.value = parseInt(upperSlider.max) - 1;
    //       }

    //    }
    //    rangeColor.style.marginLeft = (lowerSlider.value * 10) + '%';
    //    rangeColor.style.width = (upperSlider.value * 10) - (lowerSlider.value * 10) + '%';

    //    console.log('lower value: ' + lowerSlider.value);
    // };

};
