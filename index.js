$(() => {
  $("#open").click(() => {
    var win = window.open("http://stackoverflow.com/", "_blank");
    if (win) {
      //Browser has allowed it to be opened
      win.focus();
    } else {
      //Browser has blocked it
      alert("Please allow popups for this website");
    }
  });
});
