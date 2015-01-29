$(document).ready(function() {
	$(".tweet-compose").on("focus", function() {
		$(this).css("height", "66px");
		$("#char-count, #tweet-submit").css("display", "inline-block");
	});

/*	$(".tweet-compose").on("blur", function() {
		$(".tweet-compose").css("height", "33px");
		$("#char-count, #tweet-submit").css("display", "none");
	});
*/
	$(".tweet-compose").on("keyup", function(){
		var charCount = $(this).val();
		charCount = 140 - charCount.length;
		var count = $("#char-count")[0];
		count.textContent = charCount;
		if(charCount > 10) {
			$("#char-count").css("color", "#999");
			$("#tweet-submit").css("display", "inline-block");
		}
		else if (charCount >= 0) {
			$("#char-count").css("color", "red");
			$("#tweet-submit").css("display", "inline-block");
		}
		else {
			$("#tweet-submit").css("display", "none");
		}
	});
	//$("#image").attr('src');
	$("#tweet-submit").on("click", function(){
		var $tweetText = $(".tweet-compose").val();
		var $profileImage = $("#profile-summary > .content > .avatar")[0].src;
		var $fullNameItem = $("#profile-summary > .content > .fullname").html();
		var $userName = $("#profile-summary > .content > .username").html();

		var $intro = '<div class="tweet"><div class="content">';
		var $tweetContent = '<img class="avatar" src="'+$profileImage+'" />'+
							'<strong class="fullname">'+ $fullNameItem +'</strong>'+
							'<span class="username">'+ $userName +'</span>'+
							'<p class="tweet-text">'+ $tweetText +'</p>';
		var $tweetActions = '<div class="tweet-actions">'+
								'<ul>'+
									'<li><span class="icon action-reply"></span> Reply</li>'+
									'<li><span class="icon action-retweet"></span> Retweet</li>'+
									'<li><span class="icon action-favorite"></span> Favorite</li>'+
									'<li><span class="icon action-more"></span> More</li>'+
								'</ul>'+
							'</div>';
		var $stats = '<div class="stats">' +
								'<div class="retweets">' +
									'<p class="num-retweets">30</p>' +
									'<p>RETWEETS</p>' +
								'</div>' +
								'<div class="favorites">' +
									'<p class="num-favorites">6</p>' +
									'<p>FAVORITES</p>' +
								'</div>' +
								'<div class="users-interact">'+
									'<div>'+
										'<img src="img/alagoon.jpg" />'+
										'<img src="img/vklimenko.jpg" />'+
									'</div>'+
								'</div>'+
								'<div class="time">'+
									'1:04 PM - 19 Sep 13'+
								'</div>'+
							'</div>';
		var $reply = '<div class="reply">' +
						'<img class="avatar" src="img/alagoon.jpg" />'+
						'<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>'+
							'</div>';
		var $end = '</div></div>';

		var $total = $intro + $tweetContent + $tweetActions + $stats + $reply + $end;
		$("#stream").prepend($total);
	});
	$(".tweet").hover(
		function(){
			$(".tweet-actions", this).fadeIn(300);
	},
		function(){
			$(".tweet-actions", this).hide();
	});

	$(".tweet").click(function(){
		$(".retweets", this).css("display", "inline-block")
		$(".time").show();
		$(".reply").show();
	});

	$(".tweet").dblclick(function(){
		$(".retweets", this).css("display", "none")
		$(".time").hide();
		$(".reply").hide();
	});
});