//<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
//<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js"></script>
//<script type="text/javascript">

function Slider(){
    $(".slider #1").fadeIn(500);
//    $(".slider #1").delay(1500).hide("slide",{direction:'left'},500);
//    $(".slider #1").delay(1500).toggle('slide','left',500);
    $(".slider #1").delay(2500).fadeOut(500);
    var sc = $(".slider img").size();
    var count = 2;

    setInterval(function(){
//        window.alert("sometext");

          //show
          $(".slider #"+count).fadeIn(500);
//        $(".slider #"+count).delay(1500).toggle('slide','right',500).show();
//        $(".slider #"+count).show("slide",{direction:'right'},500);

          //hide
          $(".slider #"+count).delay(2500).fadeOut(500);
//        $(".slider #"+count).delay(1500).toggle('slide','left',500).hide();
//        $(".slider #"+count).delay(1500).hide("slide",{direction:'left'},500);

        if(count == sc){
                count=1;
            }else{
                count=count+1;
            }
        },3500)
    }
//</script>