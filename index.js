jQuery(function($) {
    var audio = document.getElementById('audio');

    $("#plays_btn").click(function() {

        if (audio.paused == false) {
            audio.pause();
            $("#play_btn").show();
            $("#pause_btn").hide();
        } else {
            audio.play();
            $("#play_btn").hide();
            $("#pause_btn").show();
        }
    });


    // function for timeline

    audio.addEventListener("timeupdate", function() {
        var currentTime = audio.currentTime,
            duration = audio.duration,
            currentTimeMs = audio.currentTime * 1000;
        $('.progressbar_range').stop(true, true).animate({'width': (currentTime + .25) / duration * 100 + '%'}, 250, 'linear');
    });


    // count function for timeleft

    audio.addEventListener("timeupdate", function() {
        var timeleft = document.getElementById('timeleft'),
            duration = parseInt( audio.duration ),
            currentTime = parseInt( audio.currentTime ),
            timeLeft = duration - currentTime,
            s, m, h;

        h = Math.floor(timeLeft / 3600);
        timeLeft = timeLeft - h * 3600;
        m = Math.floor( timeLeft / 60 )
        timeLeft = timeLeft - m * 60;
        s = timeLeft;

        s = s < 10 ? "0"+s : s;
        m = m < 10 ? "0"+m : m;
        h = h < 10 ? "0"+h : h;

        $('#timeleft').text("-"+h+":"+m+":"+s);
    });

    $('[data-link]').on("click", function() {
        let link = $(this).attr("data-link");
        if (window.location != window.parent.location)
        {
            window.parent.location = link;
        }
    });
});
