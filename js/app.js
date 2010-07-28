$().ready(function() {
	var images = ['i/i1.jpg', 'i/i2.jpg', 'i/i3.jpg', 'i/i4.jpg', 'i/i5.jpg', 'i/i6.jpg', 'i/i7.jpg', 'i/i8.jpg', 'i/i9.jpg', 'i/i10.jpg', 'i/i11.jpg', 'i/i12.jpg'];
	$('#myFlipbook').flipBook(images);

	window.setTimeout(function() {
		$('#myFlipbook').flipBook().flipTo(7);
	}, 700);

	$('#myFlipbook div.right').click(function() {
		$('#myFlipbook').flipBook().nextImage();
	});

	$('#myFlipbook div.left').click(function() {
		$('#myFlipbook').flipBook().prevImage();
	});
});