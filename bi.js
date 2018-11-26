(function(window)
{
	var byespeaker= {};
	var speakword="Bye";
	byespeaker.speak=function(id)
	{
		console.log(speakword+""+id);
	}
	window.byespeaker=byespeaker;

})
(window);