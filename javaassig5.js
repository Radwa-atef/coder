(function(){
 var style;
if(localStorage.getItem("stylebar")==null)
    {
        style={backg:"", image:"image/cover.jpg" , fontsize:""};
    }
else
    {
        style=JSON.parse(localStorage.getItem("stylebar"));
    }

 $(".what,.portfolio").css("backgroundColor",style.backg);
 $(".header").css("backgroundImage","url(./"+style.image+")");
$(".aboutme,.about2 h3,p,h5").css("fontSize",style.fontsize);



$("#toggleBtn").click(function(){
    $("#options-box").toggle()
})

var lis=$("#options-box ul li");
var colorlist=["red","orange","#09c","pink","#f5f5f5"];
for(var i=0; i<lis.length ; i++)
    {
      lis.eq(i).css("backgroundColor",colorlist[i]);
    }

lis.click(function(){
   var x= $(this).css("backgroundColor");
    style.backg=x;
    localStorage.setItem("stylebar",JSON.stringify(style));
    $(".what,.portfolio").css("backgroundColor",x); 
   
})

$(".img-change").click(function(){
    var x= $(this).attr("src");
    style.image=x;
    localStorage.setItem("stylebar",JSON.stringify(style));
    $(".header").css("backgroundImage","url(./"+x+")");
})

$("#plus").click(function(){
    
    if($(".aboutme,.about2 h3,p,h5").css("fontSize")>="30px")
        {
           $(".aboutme,.about2 h3,p,h5").css("fontSize","30px");
            
        }
    else{
         $(".aboutme,.about2 h3,p,h5").css("fontSize","+=1");
       }
   
})
$("#minus").click(function(){
    $(".aboutme").css("fontSize","-=1");
    $(".about2 h3,p,h5").css("fontSize","-=1");
})
})()



$(window).scroll(function(){
    var wind=$(window).scrollTop();
    var off=$(".aboutme").offset().top;
    var off1=$(".what").offset().top;
    var off2=$(".portfolio").offset().top;
    var off3=$(".hireme").offset().top;
    if(wind > off-100)
        {
            $(".navbar").css("backgroundColor","rgba(0,0,0,0.5)"); 
            $(".navbar li .about").css("color","#ec3237");
        }
    else
        {
          $(".navbar").css("backgroundColor","black"); 
            $(".navbar li .about").css("color","white");
        }
    if(wind > off1-100)
        {
            $(".navbar li .work").css("color","#ec3237");
            $(".navbar li .about").css("color","white");
            
        }
    else
        {
            $(".navbar li .work").css("color","white");
        }
    if(wind > off2-100)
        {
            $(".navbar li .portfo").css("color","#ec3237");
            $(".navbar li .work").css("color","white");
            
        }
    else
        {
            $(".navbar li .portfo").css("color","white");
        }
    if(wind > off3-100)
        {
            $(".navbar li .hirem").css("color","#ec3237");
            $(".navbar li .portfo").css("color","white");
            
        }
    else
        {
            $(".navbar li .hirem").css("color","white");
        }
    
    
})
$("#btnUp").click(function(){
    $("html,body").animate({scrollTop:'0'},3000)
})
$(".navbar a").click(function(){
   var y= $(this).attr("href");
    var secOff=$(y).offset().top;
    $("html,body").animate({scrollTop:secOff},1000)
})
$(document).ready(function(){
    $("#loading").fadeOut(2000,function(){
        $("body").css("overflow","auto")
    })
})
