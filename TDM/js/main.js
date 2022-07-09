var back_color="#002b36";
var base_color="#28a745";
var ans_color="#eaf100";
var search_text="";

function applycolor(b_color,b2_color,a_color){
	$("body").css("background-color",b_color);
	$(".quiz, .lead, label").css("color",b2_color);
}

var ul=document.getElementById('result');
var count=0;
var prev_val2;

document.getElementById('txt').addEventListener('keyup',function(){
	search_text=this.value;
	count=0;
	if(this.value==''){
		return;
	}

	$('.result').removeClass('result');
	prev_val2=$('#result td:nth-child(1):contains("'+search_text+'")').filter('.퀴즈');
	
	if(prev_val2.length>0){
		prev_val2.parent().addClass('result');
		alltr = $('#result tr');
		prev_val2.each(function(index, element){
			var bros=$(element).parent();
			for(i=1; i < $(element).attr('rowspan'); i++){
				bros.next().addClass('result');
				bros=bros.next();
			}
		});
		$('#result tr').first().addClass('result');
		
	}
	
});

applycolor(back_color,base_color,ans_color);

$('#txt').keydown(function(e){
	if(e.which==192){
	var message=$("#txt").val();
message=message.substr(0,message.length-1);
$("#txt").val(message);
return false;
}});
