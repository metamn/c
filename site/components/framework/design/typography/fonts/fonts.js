var servedFromTypekit = false;

for (var i=0; i < fonts.length; i++) {
  servedFromTypekit = (font.served_from == "Typekit");
}

if (servedFromTypekit) {
  try {
    Typekit.load({
      async: true
    });
  } catch(e) {
    //
  }
}
