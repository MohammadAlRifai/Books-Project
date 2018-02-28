var Books ={
	history:["The Beginning and The End","History of Tabari","History of Syria","History of the Prophets and Kings"],
	science:["A Brief History of Time","A Brief History Of Time","Age of science","Physics of the Impossible"],
	novels:["THE GREAT GATSBY","A PORTRAIT OF THE ARTIST AS A YOUNG MAN","LOLITA","BRAVE NEW WORLD"],
	literature:["l1","l2","l3","l4"],
	poetry:["p1","p2","p3","p4",""],
	health:["h1","h2","h3","h4"],
	artist:["a1","a2","a3","a4"],
	relegion:["r1","r2","r3","r4"]
}

//////////
$(document).ready(function() {
	$(".history").on('click','a',function()
		{
			$('#infoHistory').slidDown();
		});
})
