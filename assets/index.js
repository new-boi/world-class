var page = 0;
document.getElementById("btn1").onclick=function(){

    page = 2;
    document.getElementById("bg_img1").style.opacity = 0;
    document.getElementById("bg_img2").style.opacity = 1;
    document.getElementById("btn1").style.visibility='hidden';
    document.getElementById("nested1").style.visibility = "visible";
    document.getElementById("btn_home").style.visibility = "visible";
    document.getElementById("next_btn").style.visibility = "visible";

}



document.getElementById("btn_home").onclick=function(){


    document.getElementById("btn_minimize").style.visibility = "hidden";

    if(page==3){
        document.getElementById("bg_img1").style.opacity = 1;
        document.getElementById("bg_img3").style.opacity = 0;
        document.getElementById("main_content1").style.opacity = 0;

    }
    if(page==4){
        document.getElementById("bg_img1").style.opacity = 1;
        document.getElementById("bg_img3").style.opacity = 0;
        document.getElementById("main_content2").style.opacity = 0;

    }
    if(page==5){
        document.getElementById("bg_img1").style.opacity = 1;
        document.getElementById("bg_img3").style.opacity = 0;
        document.getElementById("main_content3").style.opacity = 0;

    }
    if(page==6){
        document.getElementById("bg_img1").style.opacity = 1;
        document.getElementById("bg_img3").style.opacity = 0;
        document.getElementById("main_content4").style.opacity = 0;

    }
    if(page==7){
        document.getElementById("bg_img1").style.opacity = 1;
        document.getElementById("bg_img3").style.opacity = 0;
        document.getElementById("main_content5").style.opacity = 0;

    }
    if(page==8){
        document.getElementById("bg_img1").style.opacity = 1;
        document.getElementById("bg_img3").style.opacity = 0;
        document.getElementById("main_content6").style.opacity = 0;

    }
    if(page==9){
        document.getElementById("bg_img1").style.opacity = 1;
        document.getElementById("bg_img3").style.opacity = 0;
        document.getElementById("main_content7").style.opacity = 0;

    }


    page = 2;
    document.getElementById("bg_img1").style.opacity = 1;
    document.getElementById("bg_img2").style.opacity = 0;
    document.getElementById("btn1").style.visibility='visible';
    document.getElementById("nested1").style.visibility = "hidden";
    document.getElementById("btn_home").style.visibility = "hidden";
    document.getElementById("next_btn").style.visibility = "hidden";


  
}

document.getElementById("btn_content1").onclick=function(){

    page = 3;


    document.getElementById("bg_img3").style.opacity = 1;
    document.getElementById("bg_img2").style.opacity = 0;
    document.getElementById("main_content1").style.opacity = 1;
    document.getElementById("nested1").style.visibility = "hidden";
    document.getElementById("btn_minimize").style.visibility = "visible";



}

document.getElementById("btn_content2").onclick=function(){

    page = 4;
  
    document.getElementById("bg_img3").style.opacity = 1;
    document.getElementById("bg_img2").style.opacity = 0;
    document.getElementById("main_content2").style.opacity = 1;
    document.getElementById("nested1").style.visibility = "hidden";
    document.getElementById("btn_minimize").style.visibility = "visible";




}

document.getElementById("btn_content3").onclick=function(){

    page = 5;
   
    document.getElementById("bg_img3").style.opacity = 1;
    document.getElementById("bg_img2").style.opacity = 0;
    document.getElementById("main_content3").style.opacity = 1;
    document.getElementById("nested1").style.visibility = "hidden";
    document.getElementById("btn_minimize").style.visibility = "visible";




}
document.getElementById("btn_content4").onclick=function(){

    page = 6;

    document.getElementById("bg_img3").style.opacity = 1;
    document.getElementById("bg_img2").style.opacity = 0;
    document.getElementById("main_content4").style.opacity = 1;
    document.getElementById("nested1").style.visibility = "hidden";
    document.getElementById("btn_minimize").style.visibility = "visible";




}
document.getElementById("btn_content5").onclick=function(){

    page = 7;

    document.getElementById("bg_img3").style.opacity = 1;
    document.getElementById("bg_img2").style.opacity = 0;
    document.getElementById("main_content5").style.opacity = 1;
    document.getElementById("nested1").style.visibility = "hidden";
    document.getElementById("btn_minimize").style.visibility = "visible";




}
document.getElementById("btn_content6").onclick=function(){

    page = 8;
 
    document.getElementById("bg_img3").style.opacity = 1;
    document.getElementById("bg_img2").style.opacity = 0;
    document.getElementById("main_content6").style.opacity = 1;
    document.getElementById("nested1").style.visibility = "hidden";
    document.getElementById("btn_minimize").style.visibility = "visible";




}
document.getElementById("btn_content7").onclick=function(){

    page = 9;
 
    document.getElementById("bg_img3").style.opacity = 1;
    document.getElementById("bg_img2").style.opacity = 0;
    document.getElementById("main_content7").style.opacity = 1;
    document.getElementById("nested1").style.visibility = "hidden";
    document.getElementById("next_btn").style.visibility = "hidden";
    document.getElementById("btn_minimize").style.visibility = "visible";




}


document.getElementById("next_btn").onclick=function(){

    page++;

    document.getElementById("btn_minimize").style.visibility = "visible";

    if(page == 3){
        document.getElementById("bg_img3").style.opacity = 1;
        document.getElementById("bg_img2").style.opacity = 0;
        document.getElementById("main_content1").style.opacity = 1;
        document.getElementById("nested1").style.visibility = "hidden";

    }






    if(page==4){
        document.getElementById("bg_img3").style.opacity = 1;
        document.getElementById("main_content1").style.opacity = 0;
        document.getElementById("main_content2").style.opacity = 1;

    }
    if(page==5){
        document.getElementById("bg_img3").style.opacity = 1;
        document.getElementById("main_content2").style.opacity = 0;
        document.getElementById("main_content3").style.opacity = 1;

    }
    if(page==6){
        document.getElementById("bg_img3").style.opacity = 1;
        document.getElementById("main_content3").style.opacity = 0;
        document.getElementById("main_content4").style.opacity = 1;

    }
    if(page==7){
        document.getElementById("bg_img3").style.opacity = 1;
        document.getElementById("main_content4").style.opacity = 0;
        document.getElementById("main_content5").style.opacity = 1;

    }
    if(page==8){
        document.getElementById("bg_img3").style.opacity = 1;
        document.getElementById("main_content5").style.opacity = 0;
        document.getElementById("main_content6").style.opacity = 1;
    }
    if(page==9){
        document.getElementById("bg_img3").style.opacity = 1;
        document.getElementById("main_content6").style.opacity = 0;
        document.getElementById("main_content7").style.opacity = 1;
        document.getElementById("next_btn").style.visibility = "hidden";
        


    }

    
}

document.getElementById("btn_minimize").onclick=function(){
   
    console.log('mini')

    document.getElementById("nested1").style.visibility = "visible";
    document.getElementById("bg_img2").style.opacity = 1;
    document.getElementById("bg_img3").style.opacity = 0;
    document.getElementById("btn_minimize").style.visibility = "hidden";




    if(page==3){
      

        document.getElementById("main_content1").style.opacity = 0;

    }
    if(page==4){
      

        document.getElementById("main_content2").style.opacity = 0;

    }
    if(page==5){


        document.getElementById("main_content3").style.opacity = 0;

    }
    if(page==6){

        document.getElementById("main_content4").style.opacity = 0;

    }
    if(page==7){


        document.getElementById("main_content5").style.opacity = 0;

    }
    if(page==8){


        document.getElementById("main_content6").style.opacity = 0;

    }
    if(page==9){

        document.getElementById("main_content7").style.opacity = 0;

    }
    page=2;
}