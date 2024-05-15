jQuery(document).ready(function($) {
    loadOwl(); // load own carosle
    $('body').on('change', '#filter-by-year,#filter-by-month', function() {
        var year = $('#filter-by-year').val();
        var month = $('#filter-by-month').val();
        var type = $(this).data('type');
        $('.movies-container').css('display', 'flex');
        jQuery.ajax({
            type: "post",
            dataType: "json",
            url: movieConfig.ajaxurl,
            data: {
                action: 'get_movies_ajax',
                year: year,
                month: month,
                listtype: type,
            },
            success: function(res) {
                if (res.status == "success") {
                    $('.movies-list-wrap').html(res.data);
                }
                loadOwl();
                setTimeout(function() {
                    $('.movies-container').css('display', 'none');
                }, 500);
            }
        });
    })


    function loadOwl() {
        $('.owl-carousel').owlCarousel('destroy'); // destroyed
        $('.owl-carousel').owlCarousel({
            loop: false,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        })
    }
});

//Add backgrounf poster image option
document.addEventListener('DOMContentLoaded', function() {
    // Get the image element with class "detail-img"
    var imgElement = document.querySelector('.detail-img');

    // Get the src attribute of the image
    var imageUrl = imgElement.getAttribute('src');

    // Get the section element with class "big-bnr"
    var sectionElement = document.querySelector('.big-bnr');

    // Apply the background image style to the section element
    sectionElement.style.backgroundImage = 'url("' + imageUrl + '")';
    sectionElement.style.backgroundPosition = '0px -760px';
    sectionElement.style.backgroundSize = 'cover';
});
