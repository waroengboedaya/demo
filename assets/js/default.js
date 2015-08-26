/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, sr, undefined) {
    "use strict";

    var $document = $(document);

     $(window).bind("load resize", function() {
        console.log($(this).width())
        if ($(this).width() < 768) {
            $('div.sidebar-collapse').addClass('collapse')
        } else {
            $('div.sidebar-collapse').removeClass('collapse')
            $('.sidebar').css('height', 'auto');
        }
    })


    $document.ready(function () {
      if(document.querySelector("#menu")){
         $('#menu').metisMenu();
      }
     if(document.querySelector("#grid-basic")){
        $("#grid-basic").bootgrid();
    } 

    if(document.querySelector(".fly-group")){
         $('body').flyLabels();
    } 

    

   if(document.querySelector("#calendar")){
  $('#calendar').fullCalendar({
        // put your options and callbacks here
      now: '2015-06-07',
      editable: true,
      aspectRatio: 5,
      scrollTime: '00:00',
      slotDuration:'03:00:00',
      header: {
        left: 'today prev,next',
        center: 'title',
        right: 'timelineDay,timelineThreeDays,agendaWeek,month'
      },
      defaultView: 'timelineDay',
      views: {
        timelineThreeDays: {
          type: 'timeline',
          duration: { days: 3 },
           slotDuration:'06:00:00'
        }
      },
      resourceAreaWidth: '40%',
      resourceColumns: [
        {
          group: true,
          labelText: 'Category',
          field: 'category'
        },
        {
          labelText: 'Title',
          field: 'title'
        },
        {
          labelText: 'Priority',
          field: 'occupancy'
        }
      ],
      resources: [
        { id: 'a', category: 'Defect', title: 'Work Item A', occupancy: 40 },
        { id: 'b', category: 'Defect', title: 'Work Item B', occupancy: 40, eventColor: 'green' },
        { id: 'c', category: 'Defect', title: 'Work Item C', occupancy: 40, eventColor: 'orange' },
        { id: 'd', category: 'Defect', title: 'Work Item D', occupancy: 40, children: [
          { id: 'd1', title: 'Sub Work Item D1', occupancy: 10 },
          { id: 'd2', title: 'Sub Work Item D2', occupancy: 10 }
        ] },
        { id: 'e', category: 'Defect', title: 'Work Item E', occupancy: 40 },
        { id: 'f', category: 'Feature', title: 'Work Item F', occupancy: 40, eventColor: 'red' },
        { id: 'g', category: 'Feature', title: 'Work Item G', occupancy: 40 },
        { id: 'h', category: 'Issue', title: 'Work Item E', occupancy: 40 },
        { id: 'i', category: 'Issue', title: 'Work Item F', occupancy: 40, eventColor: 'red' },
        { id: 'j', category: 'Issue', title: 'Work Item G', occupancy: 40 }
      ],
      events: [
        { id: '1', resourceId: 'b', start: '2015-06-07T02:00:00', end: '2015-06-07T07:00:00', title: 'event title 1' },
        { id: '2', resourceId: 'c', start: '2015-06-07T05:00:00', end: '2015-07-07T22:00:00', title: 'event title 2' },
        { id: '3', resourceId: 'd', start: '2015-06-06', end: '2015-06-08', title: 'event title 3' },
        { id: '4', resourceId: 'e', start: '2015-06-07T03:00:00', end: '2015-06-07T08:00:00', title: 'event title 4' },
        { id: '5', resourceId: 'f', start: '2015-06-07T00:30:00', end: '2015-06-09T02:30:00', title: 'event title 5' },
        { id: '6', resourceId: 'd1', start: '2015-06-07T02:30:00', end: '2015-06-09T02:00:00', title: 'sub event title 1' },
        { id: '7', resourceId: 'd2', start: '2015-06-05T02:30:00', end: '2015-06-07T18:00:00', title: 'sub event title 2' }
      ]

    })

   }


    });
})(jQuery);

//http://stackoverflow.com/questions/4866284/jquery-add-class-active-on-menu
/*var index = document.location.href.lastIndexOf("/") + 1;
var page = document.location.href.substring(index,document.location.href.length);
var parentpath=  document.location.href.substring(0,index-1);
var parent=parentpath.substring(parentpath.lastIndexOf("/") + 1,parentpath.length);
console.log("index :"+index+" -- page:"+page+" -- parent:"+parent);
$('a[href="'+page+'"]').parents('li').addClass('active');
$('a[href="'+page+'"]').addClass('active');
*/
