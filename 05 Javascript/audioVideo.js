var video = document.getElementById("video"),
    audio = document.getElementById("audio"),
    btnPlay = document.getElementById("play"),
    btnPause = document.getElementById("pause"),
    volumen = document.getElementById("volumen");

btnPlay.addEventListener("click", function() {
  video.play();
  audio.play();
});

btnPause.addEventListener("click", function() {
  video.pause();
  audio.pause();
});

volumen.addEventListener("change", function() {
  video.volume = volumen.value;
  audio.volume = volumen.value;
});

/*
  Propiedades extra:
    -> video.currentTime: regresa el tiempo actual en el que va el video/audio.
    -> video.duration: regresa la duracion del video/audio.
    -> video.ended: regrea si el video ya termino.

    Eventos:
      -> play
      -> pause
*/