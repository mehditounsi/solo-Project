// $(document).ready(function(){

// var images=["chicago.png","green.png","blackwhite.jpg","brown.jpg","dior.jpg","orange.jpg","purple.png","blue.jpg"]
// var image2 = Math.floor((Math.random() * 8) + 1);
// var image3 = Math.floor((Math.random() * 8) + 1);
// var img =  0
// 	$(".firstbutton").click(function(){
// 		if(img === images.length){
// 			img = 0
// 		}
// $(".Sneaker").attr("src",images[img])
// 	img++
// 	});
// })


$(document).ready(function(){
var i =0
var products=[
{image:"chicago.png",price:"350$"},
{image:"green.png",price:"400$"},
{image:"blackwhite.jpg",price:"550$"},
{image:"brown.jpg",price:"500$"},
{image:"dior.jpg",price:"480$"},
{image:"orange.jpg",price:"10 630,00$"},
{image:"purple.png",price:"300$"},
{image:"blue.jpg",price:"450$"}]
	$(".firstbutton").click(function(){

		if(i === products.length){
			i=0
		}
$(".Sneaker").attr("src",products[i++].image)
$('.price').html(products[i].price)
	});
})