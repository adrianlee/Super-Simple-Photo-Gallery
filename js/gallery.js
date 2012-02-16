var $container = $('#container');

function boxmaker (src) {
  return  '<div class="box col">' + 
        '<img src="' + src + '"/>' +
          '</div>';
}

function populate(list) {
  _.each(list, function (x) {
    var $boxes = $(boxmaker(x));
    $container.append( $boxes ).masonry( 'appended', $boxes );
  });
}


$(function(){
  var $container = $('#container');
  
  $(window).resize(function() {
    var w = $(window).width()/4-4;
    $('.col').css('width', w);
    $('div.col > img').css('width', w);
    $container.masonry( 'reload' );
  });

  var list = [
    'http://farm5.static.flickr.com/4113/5013039951_3a47ccd509.jpg',
    'http://farm5.static.flickr.com/4131/5013039885_0d16ac87bc.jpg',
    'http://farm5.static.flickr.com/4086/5013039583_26717f6e89.jpg',
    'http://farm5.static.flickr.com/4146/5013646070_f1f44b1939.jpg',
    'http://farm5.static.flickr.com/4144/5013039541_17f2579e33.jpg',
    'http://farm5.static.flickr.com/4153/5013039741_d860fb640b.jpg',
    'http://farm5.static.flickr.com/4113/5013039697_a15e41fcd8.jpg',
    'http://farm5.static.flickr.com/4124/5013646314_c7eaf84918.jpg',
    'http://farm5.static.flickr.com/4089/5013040075_bac12ff74e.jpg',
    'http://farm5.static.flickr.com/4113/5013039951_3a47ccd509.jpg',
    'http://farm5.static.flickr.com/4131/5013039885_0d16ac87bc.jpg',
    'http://farm5.static.flickr.com/4086/5013039583_26717f6e89.jpg',
    'http://farm5.static.flickr.com/4146/5013646070_f1f44b1939.jpg',
    'http://farm5.static.flickr.com/4144/5013039541_17f2579e33.jpg',
    'http://farm5.static.flickr.com/4153/5013039741_d860fb640b.jpg',
    'http://farm5.static.flickr.com/4113/5013039697_a15e41fcd8.jpg',
    'http://farm5.static.flickr.com/4124/5013646314_c7eaf84918.jpg',
    'http://farm5.static.flickr.com/4113/5013039951_3a47ccd509.jpg',
    'http://farm5.static.flickr.com/4131/5013039885_0d16ac87bc.jpg',
    'http://farm5.static.flickr.com/4086/5013039583_26717f6e89.jpg',
    'http://farm5.static.flickr.com/4146/5013646070_f1f44b1939.jpg',
    'http://farm5.static.flickr.com/4144/5013039541_17f2579e33.jpg',
    'http://farm5.static.flickr.com/4153/5013039741_d860fb640b.jpg',
    'http://farm5.static.flickr.com/4113/5013039697_a15e41fcd8.jpg',
    'http://farm5.static.flickr.com/4124/5013646314_c7eaf84918.jpg'
  ];

  populate(list);
  var w = $(window).width()/4-4;
  $('.col').css('width', w);
  $('div.col > img').css('width', w);

  $container.imagesLoaded( function(){
    $container.masonry({
      isAnimated: true,
      itemSelector : '.box'
    });
    
    //$container.masonry( 'reload' );
  });
});