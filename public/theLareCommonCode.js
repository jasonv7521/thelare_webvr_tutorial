var vRViewPlayer = function(elementIdName, options) {
  console.log('Creating VR View Player');
  return new VRView.Player(elementIdName, options);
}

var drawingRoom = vRViewPlayer('#first-vr-example', {
  image: 'https://galaxy-note2.gadgethacks.com/how-to/install-jelly-bean-4-2s-photo-sphere-camera-gallery-your-samsung-galaxy-note-2-0147038/',
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
