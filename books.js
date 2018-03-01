var Books =
[{type:"history",des:"Book name:Complete History of the World , Numbers of pages:700 ,Author: Richard Overy",img:"https://images-na.ssl-images-amazon.com/images/I/51RMTBg6KrL._SX258_BO1,204,203,200_.jpg"}
,{type:"science",des:"Book name:The War on Science , Numbers of pages: 600 ,Author: Shwan Otto",img:"http://t3.gstatic.com/images?q=tbn:ANd9GcTMNaNG9OvOpPdRqEMPghheEH1jaF8McY6qJqgh2kYieqYxsbpz"}
,{type:"novels",des:"Book name: Gone with the Wind , Numbers of pagese: 300 ,Author: Margaret Mitchell",img:"https://shortlist.imgix.net/app/uploads/2013/05/24215057/the-greatest-war-novels-of-all-time-11.jpg?w=1200&h=1&fit=max&auto=format%2Ccompress"}
,{type:"health",des:"Book name: It Starts with Food, Numbers of pages: 250 ,Author:Dallas& Melissa Hartwig",img:"https://images-na.ssl-images-amazon.com/images/I/51W4ZHsNzvL._SX331_BO1,204,203,200_.jpg"}
,{type:"poems",des:"Book name: Deaths and Entrances, Numbers of pages: 500  ,Author:Dylan Thomas",img:"http://c8.alamy.com/comp/B0C760/deaths-and-entrances-poems-by-dylan-thomas-hardback-book-with-cover-B0C760.jpg"}
]


$(document).ready(function() {
	$('#btn').click(function(){
		for(var i=0;i<Books.length;i++)
		{
			if(Books[i].type===$('input#form-search').val().toLowerCase())
			{
				var imgSource=Books[i].img;
				//$('#description').append($('<img src="">'))
				 $("#bookCover").attr('src',imgSource);
 				 $('#paragraph').text(Books[i].des)
 				 $('div#description').css('background','#A9A9A9')
 				 return

			}
		}
		 alert("This book class does not exist, please select one of these : history ,science ,novels ,health ,poems")
		 return
		
	});
 
 });
