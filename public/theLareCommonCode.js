var vRViewPlayer = function(elementIdName, options) {
  console.log('Creating VR View Player');
  return new VRView.Player(elementIdName, options);
}

var drawingRoom = vRViewPlayer('#first-vr-example', {
  image: 'http://www.englishbay.com/wp-content/uploads/2014/05/PANO_20140518_142918.jpg',
  is_stereo: false,
});

window.addEventListener('load', drawingRoom);

var roomDrawing = vRViewPlayer('#second-vr-example', {
  image: 'https://photosphereviewer.net/images/demo/demo5_full.jpg',
  is_stereo: false,
});

window.addEventListener('load', roomDrawing);

var boxRoomTemplate = vRViewPlayer('#third-vr-example', {
  image: 'https://img.gadgethacks.com/img/36/34/63504998762895/0/install-jelly-bean-4-2s-photo-sphere-camera-gallery-your-samsung-galaxy-note-2.1280x600.jpg',
  is_stereo: false,
});

window.addEventListener('load', boxRoomTemplate);
