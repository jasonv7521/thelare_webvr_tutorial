var vRViewPlayer = function(elementIdName, options) {
  console.log('Creating VR View Player');
  return new VRView.Player(elementIdName, options);
}

var drawingRoom = vRViewPlayer('#first-vr-example', {
  image: 'http://conphotography.com/wp-content/uploads/2015/02/ello-.jpg',
  is_stereo: false,
});

window.addEventListener('load', drawingRoom);

var roomDrawing = vRViewPlayer('#second-vr-example', {
  image: 'https://raw.githubusercontent.com/lare-student/thelare_webvr_tutorial/master/public/assets/hand-drawn-room.jpg',
  is_stereo: false,
});

window.addEventListener('load', roomDrawing);

var boxRoomTemplate = vRViewPlayer('#third-vr-example', {
  image: 'https://raw.githubusercontent.com/lare-student/thelare_webvr_tutorial/master/public/assets/example-rectangular-room.png',
  is_stereo: false,
});

window.addEventListener('load', boxRoomTemplate);
