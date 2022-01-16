function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function sleep_toggle_typing(index, e, extra, txtlen, listlen) {
  return sleep(1000*index + extra).then(function () {
    $(e).attr("style", "");
    $(e).toggleClass("typing");
    console.log(txtlen);
    $(e).css("width", txtlen + "ch");
    $(e).css("animation","typing .3s steps(" + txtlen + ")");
    $(e).toggleClass("terminal-prompt");
    sleep(1000*index).then(function () {
      if ((index+1) == listlen) {
        return;
      }
      $(e).toggleClass("terminal-prompt");
    });
  });
}

var extra = 0;
var listlen = $("#crtscreen * ").length;

$("#crtscreen * ").each(function(index, e){
    var clsLst = e.classList;

    var stay = false;
    var pause = false;
    var disk = false;
    $(clsLst).each(function(index, e){
      if (e == "stay") {
        // stay for 20 secs
        stay = true;
      } else if (e == "pause") {
        // stay for 5 secs
        pause = true;
      } else if (e == "disk-sound") {
        // play disk sound
        disk = true;
      }
    });
    var txtlen = $(e).text().length + 1;
    if (stay) {
      extra += 8000;
    }
    if (pause) {
      extra += 4000;
    }
    if (index == 0){
      sleep(1000*index + extra).then(function () {
        $(e).removeClass("terminal-prompt");
        $(e).attr("style", "display:none;");
      });
      return;
    }
    sleep_toggle_typing(index, e, extra, txtlen + 3, listlen);
});
