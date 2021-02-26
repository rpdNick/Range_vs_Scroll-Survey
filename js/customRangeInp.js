$.fn.WBslider = function() {
    return this.each(function() {
        var $_this = $(this),
            $_input = $('input', $_this),
            $_current_value = $('.current-value', $_this),
            $_min_value = $('.min-value', $_this).text(),
            $_max_value = $('.max-value', $_this).text(),
            thumbwidth = 40; // set this to the pixel width of the thumb

        // set range max to current year
        $_input.attr('max', $_max_value);
        $('.max-value', $_this).text($_max_value);
        //$_input.val($_max_value - 10);

        $_input.on('input ', function() {

            var $_this = $(this),
                val = parseInt($_input.val(), 10);
            if (val === '') { // Stop IE8 displaying NaN
                val = 0;
            }

            $_current_value.text(val);
            $('.prev-value').text(val - 1);
            $('.next-value').text(val + 1);


            var pos = (val - $_input.attr('min'))/($_input.attr('max') - $_input.attr('min'));

            // position the title with the thumb
            var thumbCorrect = thumbwidth * (pos - 0.5) * -1,
                titlepos = Math.round( ( pos * $_input.width() ) - thumbwidth/3 + thumbCorrect);
            var prevTitlePos = Math.round( ( pos * $_input.width() ) - thumbwidth/3 + thumbCorrect - 18);
            var nextTitlePos = Math.round( ( pos * $_input.width() ) - thumbwidth/3 + thumbCorrect + 38);
            $('.prev-value').css({'left': prevTitlePos});
            $('.next-value').css({'left': nextTitlePos});

            $_current_value.css({'left': titlepos});

            // show "progress" on the track
            pos = Math.round( pos * 99 ); // to hide stuff behide the thumb
            var grad = '';
            // console.log(pos);
            if(pos == 0){
                grad = 'linear-gradient(90deg, #8D0205 1.13%' + pos + '%,#E6E6E6 ' + (pos+1) + '%)';
            }
            else if(pos == 10){
                grad = 'linear-gradient(90deg, #8D0205 1.13%, #CB4B46 10.91%' + pos + '%,#E6E6E6 ' + (pos+1) + '%)';
            }else if (pos == 20) {
                grad = 'linear-gradient(90deg, #8D0205 1.13%, #CB4B46 10.91%, #FE5A59 19.15%' + pos + '%,#E6E6E6 ' + (pos+1) + '%)';
            }else  if (pos == 30){
                grad = 'linear-gradient(90deg, #8D0205 1.13%, #CB4B46 10.91%, #FE5A59 19.15%, #FF8353 27.39%' + pos + '%,#E6E6E6 ' + (pos+1) + '%)';
            }else if (pos == 40){
                grad = 'linear-gradient(90deg, #8D0205 1.13%, #CB4B46 10.91%, #FE5A59 19.15%, #FF8353 27.39%, #FF8353 36.66%' + pos + '%,#E6E6E6 ' + (pos+1) + '%)';
            }
            else if (pos == 50){
                grad = 'linear-gradient(90deg, #8D0205 1.13%, #CB4B46 10.91%, #FE5A59 19.15%, #FF8353 27.39%, #FF8353 36.66%, #FFA400 44.39%' + pos + '%,#E6E6E6 ' + (pos+1) + '%)';
            }
            else if (pos == 59){
                grad = 'linear-gradient(90deg, #8D0205 1.13%, #CB4B46 10.91%, #FE5A59 19.15%, #FF8353 27.39%, #FF8353 36.66%, #FFA400 44.39%, #FFB800 53.65%' + pos + '%,#E6E6E6 ' + (pos+1) + '%)';
            }
            else if (pos == 69){
                grad = 'linear-gradient(90deg, #8D0205 1.13%, #CB4B46 10.91%, #FE5A59 19.15%, #FF8353 27.39%, #FF8353 36.66%, #FFA400 44.39%, #FFB800 53.65%, #D7E317 62.41%' + pos + '%,#E6E6E6 ' + (pos+1) + '%)';
            }
            else if (pos == 79){
                grad = 'linear-gradient(90deg, #8D0205 1.13%, #CB4B46 10.91%, #FE5A59 19.15%, #FF8353 27.39%, #FF8353 36.66%, #FFA400 44.39%, #FFB800 53.65%, #D7E317 62.41%, #C5F65C 70.65%' + pos + '%,#E6E6E6 ' + (pos+1) + '%)';
            }
            else if (pos == 89){
                grad = 'linear-gradient(90deg, #8D0205 1.13%, #CB4B46 10.91%, #FE5A59 19.15%, #FF8353 27.39%, #FF8353 36.66%, #FFA400 44.39%, #FFB800 53.65%, #D7E317 62.41%, #C5F65C 70.65%, #00E355 79.92%' + pos + '%,#E6E6E6 ' + (pos+1) + '%)';
            }
            else if (pos == 99){
                grad = 'linear-gradient(90deg, #8D0205 1.13%, #CB4B46 10.91%, #FE5A59 19.15%, #FF8353 27.39%, #FF8353 36.66%, #FFA400 44.39%, #FFB800 53.65%, #D7E317 62.41%, #C5F65C 70.65%, #00E355 79.92%, #00AB23 90.73%, #079D26 100%' + pos + '%,#E6E6E6 ' + (pos+1) + '%)';
            }

            $_input.css({'background': grad});
            // move gradient

            $('.smile-img-box').fadeIn();
            $('.margin-block').hide();
            //Change slide thumb and value color
            if (val == 0) {
                $_input.addClass('color0');
                $($_input).removeClass( "color1 color2 color3 color4 color5 color6 color7 color8 color9 color10" );
                $('.smile-img-box').addClass('face0');
                $('.smile-img-box').removeClass('face1 face2 face3 face4 face5 face6 face7 face8 face9 face10');
                $('.current-value').css('color','#8D0205');
            }
            if (val == 1) {
                $_input.addClass('color1');
                $($_input).removeClass( "color0 color2 color3 color4 color5 color6 color7 color8 color9 color10" );
                $('.smile-img-box').addClass('face1');
                $('.smile-img-box').removeClass('face0 face2 face3 face4 face5 face6 face7 face8 face9 face10');
                $('.current-value').css('color','#AE0D07');
            }
            if (val == 2) {
                $_input.addClass('color2');
                $($_input).removeClass( "color1 color0 color3 color4 color5 color6 color7 color8 color9 color10" );
                $('.smile-img-box').addClass('face2');
                $('.smile-img-box').removeClass('face1 face0 face3 face4 face5 face6 face7 face8 face9 face10');
                $('.current-value').css('color','#FE5A59');
            }
            if (val == 3) {
                $_input.addClass('color3');
                $($_input).removeClass( "color1 color2 color0 color4 color5 color6 color7 color8 color9 color10" );
                $('.smile-img-box').addClass('face3');
                $('.smile-img-box').removeClass('face1 face2 face0 face4 face5 face6 face7 face8 face9 face10');
                $('.current-value').css('color','#FF8353');
            }
            if (val == 4) {
                $_input.addClass('color4');
                $($_input).removeClass( "color1 color2 color3 color0 color5 color6 color7 color8 color9 color10" );
                $('.smile-img-box').addClass('face4');
                $('.smile-img-box').removeClass('face1 face2 face3 face0 face5 face6 face7 face8 face9 face10');
                $('.current-value').css('color','#FFB800');
            }
            if (val == 5) {
                $_input.addClass('color5');
                $($_input).removeClass( "color1 color2 color3 color4 color0 color6 color7 color8 color9 color10" );
                $('.smile-img-box').addClass('face5');
                $('.smile-img-box').removeClass('face1 face2 face3 face4 face0 face6 face7 face8 face9 face10');
                $('.current-value').css('color','#FFA400');
            }
            if (val == 6) {
                $_input.addClass('color6');
                $($_input).removeClass( "color1 color2 color3 color4 color5 color0 color7 color8 color9 color10" );
                $('.smile-img-box').addClass('face6');
                $('.smile-img-box').removeClass('face1 face2 face3 face4 face5 face0 face7 face8 face9 face10');
                $('.current-value').css('color','#D7E317');
            }
            if (val == 7) {
                $_input.addClass('color7');
                $($_input).removeClass( "color1 color2 color3 color4 color5 color6 color0 color8 color9 color10" );
                $('.smile-img-box').addClass('face7');
                $('.smile-img-box').removeClass('face1 face2 face3 face4 face5 face6 face0 face8 face9 face10');
                $('.current-value').css('color','#C5F75C');
            }
            if (val == 8) {
                $_input.addClass('color8');
                $($_input).removeClass( "color1 color2 color3 color4 color5 color6 color7 color0 color9 color10" );
                $('.smile-img-box').addClass('face8');
                $('.smile-img-box').removeClass('face1 face2 face3 face4 face5 face6 face0 face0 face9 face10');
                $('.current-value').css('color','#00E355');
            }
            if (val == 9) {
                $_input.addClass('color9');
                $($_input).removeClass( "color1 color2 color3 color4 color5 color6 color7 color8 color0 color10" );
                $('.smile-img-box').addClass('face9');
                $('.smile-img-box').removeClass('face1 face2 face3 face4 face5 face6 face7 face8 face0 face10');
                $('.current-value').css('color','#00AB23');
            }
            if (val == 10) {
                $_input.addClass('color10');
                $($_input).removeClass( "color1 color2 color3 color4 color5 color6 color7 color8 color9 color0" );
                $('.smile-img-box').addClass('face10');
                $('.smile-img-box').removeClass('face1 face2 face3 face4 face5 face6 face7 face8 face9 face0');
                $('.current-value').css('color','#079D26');
            }
            //show values
            $('.current-value').show();
            if (val < 1){
                $('.prev-value').hide();
            }
            if ( val > 9){
                $('.next-value').hide();
            }
            if (val > 0 && val < 10){
                $('.prev-value').show();
                $('.next-value').show();
            }
        });
        $_input.on('change', function() {
            $('.comment-wrapper').fadeIn();
            $('.btn-wrapper').css('display','flex');
            currValue = +this.value;
            // console.log(currValue);
            if (currValue < 7){
                $('.comment').attr('data-reqired','');
            }else {
                $('.comment').removeAttr('data-reqired');
                $('.comment-error').hide();
            }

            if (currValue  > 8){
                $('.comment').attr('placeholder','Поделитесь впечатлениями');
            }else{
                $('.comment').attr('placeholder','Что именно Вас не устроило?');
            }
        });
    });
};

$(function() {

    $('.slider').WBslider();

});