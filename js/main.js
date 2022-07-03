var back_color="#002b36";
var base_color="#28a745";
var ans_color="#eaf100";
var search_target=1;
var search_count=0;
var search_text="";
function settingDialog_saveButton(){
	$('#settingDialog').modal('hide');
	changecolor();
}
function changecolor(){
	back_color=$('#back_c').val();
	base_color=$('#quiz_c').val();
	ans_color=$('#ans_c').val();
	applycolor(back_color,base_color,ans_color);
}
function applycolor(b_color,b2_color,a_color){
	$("body").css("background-color",b_color);
	$(".quiz, .lead, label").css("color",b2_color);
}
function changeset2center(){
	if($("input:checkbox[id='set2center']").is(":checked")){
		$(".choice").css("text-align","right");
		$(".reward").css("text-align","center");
		set2center='true';
		localStorage.setItem('set2center',true);
	}
	else{
		$(".choice").css("text-align","left");
		$(".reward").css("text-align","left");
		set2center='false';
		localStorage.setItem('set2center',false);
	}
}
function hide_changelog(){
	$("#changelog").hide();
}
function storageAvailable(type){
	try{
		var storage=window[type],x='__storage_test__';
		storage.setItem(x,x);
		storage.removeItem(x);
		return true;
	}
	catch(e){
		return e instanceof DOMException&&(e.code===22||e.code===1014||e.name==='QuotaExceededError'||e.name==='NS_ERROR_DOM_QUOTA_REACHED')&&storage.length!==0;
	}
}
	
var ul=document.getElementById('result');
var count=0;
var search="";
var search1="";
var prev_val;
var prev_val2;

document.getElementById('txt').addEventListener('keyup',function(){
	search_text=this.value;
	search_count=0;
	count=0;
	if(this.value==''){
		return;
	}

	$('.result').removeClass('result');
	prev_val2=$('#result td:nth-child(1):contains("'+search_text+'")').first();
	console.log(prev_val2)
	if(prev_val2.length>0&&prev_val2.parent().children().length>2){
		$('#result tr').first().addClass('result');
		prev_val2.parent().addClass('result');
		if(prev_val2.attr('rowspan')>0){
			var i;
			var bros=prev_val2.parent();
			for(i=1; i<prev_val2.attr('rowspan'); i++){
				bros.next().addClass('result');
				bros=bros.next();
			}
		}
	}
});

$('select').on('change',function(){
	search_target=this.value;
});

applycolor(back_color,base_color,ans_color);

$('#txt').keydown(function(e){
	if(e.which==192){
	var message=$("#txt").val();
message=message.substr(0,message.length-1);
$("#txt").val(message);
return false;
}});
