product('pro-1', 'products/Product-1.jpg', '50 USD');
product('pro-2', 'products/Product-2.jpg', '50 USD');
product('pro-3', 'products/Product-3.jpg', '50 USD');
product('pro-4', 'products/Product-4.jpg', '50 USD');
function product(div, img, prc, discount) {
	var image = document.createElement('img');
	image.className = 'pro';
	image.src = img;
	image.width = '325';
	image.height = '325';
	console.log(img);
	document.getElementById(div).appendChild(image);

	var price = document.createElement('h1');
	price.innerHTML = prc;
	price.className = 'prices';
	document.getElementById(div).appendChild(price);
}