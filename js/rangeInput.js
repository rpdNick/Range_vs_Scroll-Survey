var inputRange = document.getElementsByClassName('range')[0],
    maxValue = 10, // the higher the smoother when dragging
    currValue;

// set min/max value
inputRange.min = 0;
inputRange.max = maxValue;

$(inputRange).on('change', function () {
    $('.comment-wrapper').fadeIn();
    $('.btn-wrapper').css('display','flex');
    currValue = +this.value;
    console.log(currValue);
    if (currValue < 7){
        $('.comment').attr('data-reqired','');
    }else {
        $('.comment').removeAttr('data-reqired');
        $('.comment-error').hide();
    }

});

// move gradient
inputRange.addEventListener('input', function() {
    currValue = +this.value;
    $('.range-value').text(currValue);
    $('.range-value').fadeIn();
    $('.smile-img-box').fadeIn();
    $('.margin-block').hide();
    //Change slide thumb color on way up
    if (this.value == 0) {
        inputRange.classList.add('color0');
        $(inputRange).removeClass( "color1 color2 color3 color4 color5 color6 color7 color8 color9 color10" );
        $('.smile-img-box').addClass('face0');
        $('.smile-img-box').removeClass('face1 face2 face3 face4 face5 face6 face7 face8 face9 face10');
    }
    if (this.value == 1) {
        inputRange.classList.add('color1');
        $(inputRange).removeClass( "color0 color2 color3 color4 color5 color6 color7 color8 color9 color10" );
        $('.smile-img-box').addClass('face1');
        $('.smile-img-box').removeClass('face0 face2 face3 face4 face5 face6 face7 face8 face9 face10');
    }
    if (this.value == 2) {
        inputRange.classList.add('color2');
        $(inputRange).removeClass( "color1 color0 color3 color4 color5 color6 color7 color8 color9 color10" );
        $('.smile-img-box').addClass('face2');
        $('.smile-img-box').removeClass('face1 face0 face3 face4 face5 face6 face7 face8 face9 face10');
    }
    if (this.value == 3) {
        inputRange.classList.add('color3');
        $(inputRange).removeClass( "color1 color2 color0 color4 color5 color6 color7 color8 color9 color10" );
        $('.smile-img-box').addClass('face3');
        $('.smile-img-box').removeClass('face1 face2 face0 face4 face5 face6 face7 face8 face9 face10');
    }
    if (this.value == 4) {
        inputRange.classList.add('color4');
        $(inputRange).removeClass( "color1 color2 color3 color0 color5 color6 color7 color8 color9 color10" );
        $('.smile-img-box').addClass('face4');
        $('.smile-img-box').removeClass('face1 face2 face3 face0 face5 face6 face7 face8 face9 face10');
    }
    if (this.value == 5) {
        inputRange.classList.add('color5');
        $(inputRange).removeClass( "color1 color2 color3 color4 color0 color6 color7 color8 color9 color10" );
        $('.smile-img-box').addClass('face5');
        $('.smile-img-box').removeClass('face1 face2 face3 face4 face0 face6 face7 face8 face9 face10');
    }
    if (this.value == 6) {
        inputRange.classList.add('color6');
        $(inputRange).removeClass( "color1 color2 color3 color4 color5 color0 color7 color8 color9 color10" );
        $('.smile-img-box').addClass('face6');
        $('.smile-img-box').removeClass('face1 face2 face3 face4 face5 face0 face7 face8 face9 face10');
    }
    if (this.value == 7) {
        inputRange.classList.add('color7');
        $(inputRange).removeClass( "color1 color2 color3 color4 color5 color6 color0 color8 color9 color10" );
        $('.smile-img-box').addClass('face7');
        $('.smile-img-box').removeClass('face1 face2 face3 face4 face5 face6 face0 face8 face9 face10');
    }
    if (this.value == 8) {
        inputRange.classList.add('color8');
        $(inputRange).removeClass( "color1 color2 color3 color4 color5 color6 color7 color0 color9 color10" );
        $('.smile-img-box').addClass('face8');
        $('.smile-img-box').removeClass('face1 face2 face3 face4 face5 face6 face0 face0 face9 face10');
    }
    if (this.value == 9) {
        inputRange.classList.add('color9');
        $(inputRange).removeClass( "color1 color2 color3 color4 color5 color6 color7 color8 color0 color10" );
        $('.smile-img-box').addClass('face9');
        $('.smile-img-box').removeClass('face1 face2 face3 face4 face5 face6 face7 face8 face0 face10');
    }
    if (this.value == 10) {
        inputRange.classList.add('color10');
        $(inputRange).removeClass( "color1 color2 color3 color4 color5 color6 color7 color8 color9 color0" );
        $('.smile-img-box').addClass('face10');
        $('.smile-img-box').removeClass('face1 face2 face3 face4 face5 face6 face7 face8 face9 face0');
    }
});