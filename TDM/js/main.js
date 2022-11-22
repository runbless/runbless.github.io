var back_color="#001424";
var base_color="#28a745";
var ans_color="#eaf100";

function applycolor(b_color,b2_color,a_color){
	$("body").css("background-color",b_color);
	$(".quiz, .lead, label").css("color",b2_color);
}

document.getElementById('search_term').addEventListener('keyup',function(){
	$('.result').removeClass('result');
	var searchField = $('#search_term').val();
	if(searchField == ''){}
	else{
		var regex = new RegExp(searchField, 'i');
		var output = '';
		output += '<tr class="result"><td style="text-align:center; background-color:#52525f;"><p>퀴즈 내용</p></td><td style="text-align:center; background-color:#005f6b;"><p>정답</p></td></tr>'
		$.getJSON('quiz/data.json', function (data) {
			$.each(data, function (key, val) {
				if ((val.quiz.search(regex) != -1) || (val.answer.search(regex) != -1)) {
					console.log(val);
					output += '<tr class="result"><td class="퀴즈"><p>' + val.quiz + '</p></td><td class="정답"><p>' + val.answer + '</p></td></tr>';
				}
			});
		$('#search_results').html(output);
		});
	}
});

applycolor(back_color,base_color,ans_color);