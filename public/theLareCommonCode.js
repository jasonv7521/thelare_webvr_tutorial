var vRViewPlayer = function(elementIdName, options) {
  console.log('Creating VR View Player');
  return new VRView.Player(elementIdName, options);
}

var drawingRoom = vRViewPlayer('#first-vr-example', {
  image: 'https://photosphereviewer.net/images/demo/demo5_full.jpg',
  is_stereo: false,
});
