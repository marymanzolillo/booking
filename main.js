$(document).ready(function() {
  // Initialize the FullCalendar
  $('#calendar').fullCalendar({
    events: [
      // Add your event data here (you can fetch this data from your back-end later)
      {
        title: 'Event 1',
        start: '2023-05-01',
        end: '2023-05-02',
        url: './MixedMedia.html'
      },
      {
        title: 'Event 2',
        start: '2023-05-15',
        end: '2023-05-16',
        url: './OpenStudio.html'
      }
    ],
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    defaultView: 'month',
    eventClick: function(event) {
      if (event.url) {
        window.open(event.url, '_blank');
        return false;
      }
    }
  });
});

