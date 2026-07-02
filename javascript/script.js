$(document).ready(function() {

    $('#btn-conocer-mas').on('click', function(e) {
        e.preventDefault(); 
    });
});

//----------------TESTIMONIOS--------------------//

const modalRodolfo = document.getElementById('videoRodolfo');
const iframeRodolfo = document.getElementById('iframeRodolfo');

modalRodolfo.addEventListener('shown.bs.modal', () => {
    iframeRodolfo.src =
        "https://www.youtube.com/embed/w3qRxkhy7os?autoplay=1";
});

modalRodolfo.addEventListener('hidden.bs.modal', () => {
    iframeRodolfo.src =
        "https://www.youtube.com/embed/w3qRxkhy7os";
});


// DON CARTER
const modalDonCarter = document.getElementById('videoDonCarter');
const iframeDonCarter = document.getElementById('iframeDonCarter');

modalDonCarter.addEventListener('shown.bs.modal', () => {
    iframeDonCarter.src =
        "https://www.youtube.com/embed/DsNH_tFHdEA?autoplay=1";
});

modalDonCarter.addEventListener('hidden.bs.modal', () => {
    iframeDonCarter.src =
        "https://www.youtube.com/embed/DsNH_tFHdEA";
});

// TÍO OUTLET
const modalTioOutlet = document.getElementById('videoTioOutlet');
const iframeTioOutlet = document.getElementById('iframeTioOutlet');

modalTioOutlet.addEventListener('shown.bs.modal', () => {
    iframeTioOutlet.src =
        "https://www.youtube.com/embed/_MaCcWAyc5s?autoplay=1";
});

modalTioOutlet.addEventListener('hidden.bs.modal', () => {
    iframeTioOutlet.src =
        "https://www.youtube.com/embed/_MaCcWAyc5s";
});

//--------------------------------------------//

