$(function(){
  meetup_url = "https://api.meetup.com/ew/events?callback=?&sign=true&status=upcoming&urlname=codeforde&community_urlname=Munster-DE&page=20&sign=true&key=48406a31956272b2f12c3965547d"
  $.getJSON(meetup_url,function (data) { 
    if(data.results.length > 0) {
      result = data.results[0]
      title = result.short_description;
      description = result.description;
      date = result.time;
      venue = result.venue_name;
      debugger
      if(venue) {
        latLng = [result.lat, result.lon];
      }
      $('#date span').html(new Date(date).toLocaleDateString());
      $('#next-meetup #title').html(title);
      $('#next-meetup #venue').html(venue);
      $('#next-meetup #description').html(description);
      $('#next-meetup #rvsp').attr('href',result.meetup_url);

    }
  });
});


$(function(){
$('#newsletterform').submit(function(e) {
  var $this = $(this);
  $.ajax({
      type: "GET", // GET & url for json slightly different
      url: "http://codeformuenster.us3.list-manage.com/subscribe/post-json?u=0280dca8af5c7f6308e1e36ae&id=8151d48caa&language=de&c=?",
      data: $this.serialize(),
      dataType    : 'json',
      contentType: "application/json; charset=utf-8",
      error       : function(err) { alert("Es konnte keine Verbindung hergestellt werden. Versuche es später nochmal."); },
      success     : function(data) {
          if (data.result != "success") {
            $('#newsletterError').remove();
            $('body').append('<div id="newsletterError" class="modal hide fade newsletterModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h4>Sorry</h4></div><div class="modal-body"><p>' + data.msg + '</p></div><div class="modal-footer"><button data-dismiss="modal" class="btn btn-primary">Schließen</button></div></div>');
            $('#newsletterError').modal();
          } else {
            $('#newsletterform').fadeOut();
            $('body').append('<div id="newsletterConfirm" class="modal hide fade newsletterModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h4>Nur noch ein Schritt</h4></div><div class="modal-body"><p>Vielen Dank für deine Anmeldung zum Newsletter. Um die Anmeldung zu bestätigen, klicke bitte auf den Link, den wir dir soeben zugeschickt haben.</p></div><div class="modal-footer"><button data-dismiss="modal" class="btn btn-primary">Schließen</button></div></div>');
            $('#newsletterConfirm').modal();

          }
      }
  });
  return false;
});

});