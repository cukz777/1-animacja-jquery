$(document).ready(function () {
    $('#przycisk').click(function () {
        const $kwadrat = $('#kwadrat');

        $kwadrat.animate({
            marginLeft: '100px',
            width: '100px',
            height: '100px'
        }, 3000, function () {
            $kwadrat.animate({
                backgroundColor: 'blue'
            }, 5000, function () {
                $kwadrat.html('<h2>Animacja zakończona</h2>').css({
                    color: 'white',
                    fontSize: '0.5em'
                });
            });
        });
    });
});