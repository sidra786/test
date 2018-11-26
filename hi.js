(function(window)
{
	var hispeaker={};
	var speakword="hispeaker";
	hispeaker.speak=function(id)
	{
		console.log(speakword+""+id);
	}
	window.hispeaker=hispeaker;
})(window);