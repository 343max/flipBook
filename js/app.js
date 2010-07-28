$().ready(function() {
	$('#myFlipbook').flipBook(['i/i1.jpg', 'i/i2.jpg', 'i/i3.jpg']);
	//$('#myFlipbook').flipBook(['i/one.png', 'i/two.png', 'i/three.png']);

	$('#myFlipbook div.right').click(function() {
		$('#myFlipbook').flipBook().nextImage();
	});

	$('#myFlipbook div.left').click(function() {
		$('#myFlipbook').flipBook().prevImage();
	});
});