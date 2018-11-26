(function()
{var id=["sara", "sana", "ali","james","honey",
	"room","ayesha","jamal","jolly"];
	for(var alp in id){
		var firstletter=id[alp].charAt(0).toLowerCase();
		if (firstletter ==="j"){
			byespeaker.speak(id[alp]);
		}
		else{hispeaker.speak(id[alp]);
		}
	}
})(window);