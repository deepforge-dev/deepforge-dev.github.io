$(document).ready(function() {
    $('.materialboxed').materialbox();

    // get started button scrolling
    (function() {
        var btn = document.getElementById('get-started-btn'),
            tgtSection = document.getElementById('quick-start');

        btn.onclick = function() {
            $(document.body).animate({
                'scrollTop':   $('#quick-start').offset().top
            }, 500); 
        };
    })();

    // Get the latest version name and update the main link
    $.ajax({
        url: 'https://api.github.com/repos/deepforge-dev/deepforge/releases/latest'
    }).done(function(data) {
        var releaseAnchor = $('#latest-version');
        if (data) {
            releaseAnchor.text(data.name);
        }
    });

    // Make sure all anchors change the host page if embedded in iframe
    var anchors = document.getElementsByTagName('a');
    anchors.forEach(function(anchor) {
        anchor.setAttribute('target','_top');
    });
});
