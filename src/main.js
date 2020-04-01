import news from "./news/*.html";
import whofooter from "./02-who-headline.html";
$(function() {
	
	var lastUpdate = document.getElementById('last-update');
	// axios.get("https://api.github.com/repos/md-adil/covid19rnd/commits/master", {
	// 	headers: {
	// 		"Authorization": "token 5b369b5eb2209d13933b5f7bc5e0a822dd23f184"
	// 	}
	// }).then(function(response) {
	// 	appendResult(response.data.commit.author);
	// });
	
	function appendResult(response) {
		var date = moment(response.date);
		lastUpdate.innerHTML = date.local().format("LL HH:mm:ss");
	}
	
	var $news = $('#news');
	const newkeys = Object.keys(news);
	for (let i = newkeys.length; i >= 0; i--) {
		$news.append(news[newkeys[i]]);
		$news.append($('<hr />',{class:'hr'}));
	}
	$news.append(whofooter);
});
