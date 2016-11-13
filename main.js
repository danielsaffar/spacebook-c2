 var posts = []; 


//add from html to array
var newPost = function () {
	var obj = {
		text: $('#post-name').val(),
		id: null
	}

	if(posts.length === 0){  // that means 
		obj.id = 34;
	}else{
		var lastIndex = posts.length - 1;
		obj.id = posts[lastIndex].id + 1;
	}

	posts.push(obj);

}


//add from array to html
var addPost= function()  {

	$('.posts').empty();

	for (var i =0 ; i < posts.length; i++) {

		$('.posts').append('<div class="parent"> <p data-id="' +  posts[i].id + '">' +' <a href="#" class="remove">remove</a> ' + posts[i].text + '</p> <input type="text" id="comment-name" class="comment-control" placeholder="Leave a comment!"></input></div>') 
          

	}

}

$('button').on('click', function ()   {

	var text=$('#post-name').val();
	newPost(text);
	addPost(text);
});




$('.posts').on('click' ,'.remove', function ()  {
	$(this).closest('.parent').remove();
 // Remove the data from the array 
 var dataId = $(this).closest('.parent').data().id;
  posts.splice(dataId, 1);
    

});



















