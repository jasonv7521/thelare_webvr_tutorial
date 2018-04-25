var vRViewPlayer = function(elementIdName, options) {
  console.log('Creating VR View Player');
  return new VRView.Player(elementIdName, options);
}

var drawingRoom = vRViewPlayer('#first-vr-example', {
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXy37UrLlzruFOXY9nZ3vNnLxyLrbilIvaR01dp_fK-ev7gXWc',
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
