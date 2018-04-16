$(document).ready(() => {
    let NumberToFind;
    let digit1;
    let digit2;
    let digit3;
    let digit4;

    // Create Random Number
    NumberToFind = Math.floor(1000 + Math.random() * 9000);
    digit1 = 	Math.trunc(NumberToFind/1000);
    digit2 = 	Math.trunc((NumberToFind%1000)/100);
    digit3 = 	Math.trunc((NumberToFind%100)/10);
    digit4 = 	Math.trunc((NumberToFind%10)/1);
    $(".noToFind").html(`<span class='digit-1'>${digit1}</span><span class='digit-2'>${digit2}</span><span class='digit-3'>${digit3}</span><span class='digit-4'>${digit4}</span>`);

    // Select Levels
    $(".level li").click(function(){
		$(".level li").removeClass("active");
		$(this).addClass("active");
	});

    // Input allows only number
    $(".numberValue").on('input', function (event) { 
    this.value = this.value.replace(/[^0-9]/g, '');
	});

	$(".instruction").click(function(){
		$(".instructions").show();
	})
	$(".hide, .startGame").click(function(){
		$(".instructions").hide();
	})
});

// Check Number
$.fn.checkValues = function(){
	let placeVaule = 0;
	let faceValue = 0;
	const getCurrentValue = $(this).prev(".numberValue").val();
	const val1 = 	Math.trunc(getCurrentValue/1000);
  	const val2 = 	Math.trunc((getCurrentValue%1000)/100);
	const val3 = 	Math.trunc((getCurrentValue%100)/10);
	const val4 = 	Math.trunc((getCurrentValue%10)/1);
	$(".digit-1,.digit-2,.digit-3,.digit-4").css({"background":"transparent"});
	if($(".level li.easy").hasClass("active")){
		/*For Face Value*/
		if($(".digit-1").text()==val1 || $(".digit-1").text()==val2 || $(".digit-1").text()==val3 || $(".digit-1").text()==val4){
			faceValue = faceValue+1;
			$(".digit-1").css({"background":"#d7fad7"});
		}
		if($(".digit-2").text()==val1 || $(".digit-2").text()==val2 || $(".digit-2").text()==val3 || $(".digit-2").text()==val4){
			faceValue = faceValue+1;
			$(".digit-2").css({"background":"#d7fad7"});
		}
		if($(".digit-3").text()==val1 || $(".digit-3").text()==val2 || $(".digit-3").text()==val3 || $(".digit-3").text()==val4){
			faceValue = faceValue+1;
			$(".digit-3").css({"background":"#d7fad7"});
		}
		if($(".digit-4").text()==val1 || $(".digit-4").text()==val2 || $(".digit-4").text()==val3 || $(".digit-4").text()==val4){
			faceValue = faceValue+1;
			$(".digit-4").css({"background":"#d7fad7"});
		}
		$(this).parent().next(".faceValue").text(faceValue);
		
		/*For Place Value*/
		if(val1 == $(".digit-1").text()){placeVaule = placeVaule+1;$(".digit-1").css({"text-indent":0});}
		if(val2 == $(".digit-2").text()){placeVaule = placeVaule+1;$(".digit-2").css({"text-indent":0});}
		if(val3 == $(".digit-3").text()){placeVaule = placeVaule+1;$(".digit-3").css({"text-indent":0});}
		if(val4 == $(".digit-4").text()){placeVaule = placeVaule+1;$(".digit-4").css({"text-indent":0});}
		$(this).parent().next().next(".placeValue").text(placeVaule);
	}
	if($(".level li.medium").hasClass("active")){
		/*For Face Value*/
		if($(".digit-1").text()==val1 || $(".digit-1").text()==val2 || $(".digit-1").text()==val3 || $(".digit-1").text()==val4){
			faceValue = faceValue+1;
			$(".digit-1").css({"background":"#d7fad7"});
		}
		if($(".digit-2").text()==val1 || $(".digit-2").text()==val2 || $(".digit-2").text()==val3 || $(".digit-2").text()==val4){
			faceValue = faceValue+1;
			$(".digit-2").css({"background":"#d7fad7"});
		}
		if($(".digit-3").text()==val1 || $(".digit-3").text()==val2 || $(".digit-3").text()==val3 || $(".digit-3").text()==val4){
			faceValue = faceValue+1;
			$(".digit-3").css({"background":"#d7fad7"});
		}
		if($(".digit-4").text()==val1 || $(".digit-4").text()==val2 || $(".digit-4").text()==val3 || $(".digit-4").text()==val4){
			faceValue = faceValue+1;
			$(".digit-4").css({"background":"#d7fad7"});
		}
		$(this).parent().next(".faceValue").text(faceValue);
		
		/*For Place Value*/
		if(val1 == $(".digit-1").text()){placeVaule = placeVaule+1;$(".digit-1").css({"background":"#d7fad7"});}
		if(val2 == $(".digit-2").text()){placeVaule = placeVaule+1;$(".digit-2").css({"background":"#d7fad7"});}
		if(val3 == $(".digit-3").text()){placeVaule = placeVaule+1;$(".digit-3").css({"background":"#d7fad7"});}
		if(val4 == $(".digit-4").text()){placeVaule = placeVaule+1;$(".digit-4").css({"background":"#d7fad7"});}
		$(this).parent().next().next(".placeValue").text(placeVaule);	
	}
	if($(".level li.tough").hasClass("active")){
		/*For Face Value*/
		if($(".digit-1").text()==val1 || $(".digit-1").text()==val2 || $(".digit-1").text()==val3 || $(".digit-1").text()==val4){
			faceValue = faceValue+1;
		}
		if($(".digit-2").text()==val1 || $(".digit-2").text()==val2 || $(".digit-2").text()==val3 || $(".digit-2").text()==val4){
			faceValue = faceValue+1;
		}
		if($(".digit-3").text()==val1 || $(".digit-3").text()==val2 || $(".digit-3").text()==val3 || $(".digit-3").text()==val4){
			faceValue = faceValue+1;
		}
		if($(".digit-4").text()==val1 || $(".digit-4").text()==val2 || $(".digit-4").text()==val3 || $(".digit-4").text()==val4){
			faceValue = faceValue+1;
		}
		$(this).parent().next(".faceValue").text(faceValue);
		
		/*For Place Value*/
		if(val1 == $(".digit-1").text()){placeVaule = placeVaule+1;}
		if(val2 == $(".digit-2").text()){placeVaule = placeVaule+1;}
		if(val3 == $(".digit-3").text()){placeVaule = placeVaule+1;}
		if(val4 == $(".digit-4").text()){placeVaule = placeVaule+1;}
		$(this).parent().next().next(".placeValue").text(placeVaule);
	}
	
	$(".guesses span").text(parseInt($(".guesses span").text()) + 1);
	$(this).prev().hide();
	$(this).before(`<span>${getCurrentValue}</span>`);
	$(".values").removeClass("lastNumber");
	$(this).parent().parent().removeClass("currentValue").addClass("lastNumber");
	$(this).hide();
	if($(".lastNumber .placeValue").text()==4){
		$("body").addClass("finish");
		$(".result span").text($(".guesses span").text());
		$(window).scrollTop(0);
	}else{
		$(this).parent().parent().after("<div class='values currentValue'><div class='column'><input class='numberValue' type='text' maxlength='4'><button type='submit' class='confirm' onClick='$(this).checkValues()'>Confirm</button></div><span class='faceValue column'></span><span class='placeValue column'></span></div>");
	}
	$('.numberValue').on('input', function (event) { 
    this.value = this.value.replace(/[^0-9]/g, '');
	});
	$( ".currentValue .numberValue" ).focus();
}
