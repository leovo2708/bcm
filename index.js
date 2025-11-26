document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("open").addEventListener("click", function () {
    const songs = document.getElementById("song").value.split(" ");
    for (const song of songs) {
      const s = parseInt(song);
      if (Number.isInteger(s)) {
        const url =
          "https://book.watv.org/newsong/newsong" +
          (song[0] === "0" ? "-appx00" + s : s) +
          "/";
        const result = openUrl(url);
        if (!result) return;
      }
    }
  });
});

function openUrl(url) {
  const win = window.open(url, "_blank");
  if (win) {
    //Browser has allowed it to be opened
    win.focus();
  } else {
    //Browser has blocked it
    alert("Please allow popups for this website");
    return false;
  }

  return true;
}
