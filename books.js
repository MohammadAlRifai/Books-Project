var Books =
[{type:"history",des:"Book name:Complete History of the World , Book type: History book ,Author: Richard Overy",img:"https://images-na.ssl-images-amazon.com/images/I/51RMTBg6KrL._SX258_BO1,204,203,200_.jpg"}
,{type:"science",des:"Book name:The War of Science , Book type: Science book ,Author: Shwan Otto",img:"https://static.scientificamerican.com/sciam/cache/file/D834B0F0-29FD-4E08-89776BF1F699D242.jpg?w=590&h=393&97CE5133-F56F-4863-A3C82655A3D318C1"}
,{type:"novels",des:"Book name: Gone with the Wind , Book type: Novels ,Author: Margaret Mitchell",img:"https://shortlist.imgix.net/app/uploads/2013/05/24215057/the-greatest-war-novels-of-all-time-11.jpg?w=1200&h=1&fit=max&auto=format%2Ccompress"}
,{type:"health",des:"Book name: It Starts with Food, Book type: Health book ,Author:Dallas& Melissa Hartwig",img:"https://i.ytimg.com/vi/bpKQ3q9sMFY/hqdefault.jpg"}
,{type:"poems",des:"Book name: Deaths and Entrances, Book type: Poems book  ,Author:Dylan Thomas",img:"http://c8.alamy.com/comp/B0C760/deaths-and-entrances-poems-by-dylan-thomas-hardback-book-with-cover-B0C760.jpg"}
,{type:"poems",des:"Book name: Deaths and Entrances, Book type: Poems book  ,Author:Dylan Thomas",img:""}]


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
