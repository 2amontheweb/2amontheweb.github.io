/* globals $: false */
/* globals sites: false */
'use strict';

$(function () {

  console.log('hello, world');

  var items = [];
  $.each( sites, function( _, obj ) {
    items.push( '<p><a href="'+ obj.url +'" target="_blank">' + obj.url + '</a></p>' );
  });

  $( '<div/>', {
    'class': 'my-new-list',
    html: items.join( '' )
  }).appendTo( '#sites' );

});
