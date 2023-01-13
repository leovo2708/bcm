$(() => {
  $("#open").click(() => {
    const songs = $("#song").val().split(" ");
    for (const song of songs) {
      const s = parseInt(song);
      if (Number.isInteger(s)) {
        const url = "https://book.watv.org/newsong/newsong" + s + "/";
        const result = openUrl(url);
        if (!result) return;
      }
    }
  });

  $("#appendix-open").click(() => {
    const songs = $("#appendix-song").val().split(" ");
    for (const song of songs) {
      const s = parseInt(song);
      if (Number.isInteger(s)) {
        const url = "https://book.watv.org/newsong/newsong-appendix" + s + "/";
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
