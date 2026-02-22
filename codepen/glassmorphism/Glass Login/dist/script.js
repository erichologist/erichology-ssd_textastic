lucide.createIcons();

    const audio = document.getElementById('bg-music');
    const icon = document.getElementById('music-icon');
    let isPlaying = true;

    function toggleMusic() {
      if (isPlaying) {
        audio.pause();
        icon.setAttribute("data-lucide", "volume-x");
      } else {
        audio.play();
        icon.setAttribute("data-lucide", "volume-2");
      }
      isPlaying = !isPlaying;
      lucide.createIcons();
    }