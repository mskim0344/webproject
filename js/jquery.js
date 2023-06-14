$(document).ready(function(){
            $(window).scroll(function(){
                if($(window).scrollTop() > 80){
                    // 스크롤의 위치가 80보다 커치면
                    $("body").addClass("scroll");
                    
                    // body에 scroll클래스 삽입해라
                }else{
                    $("body").removeClass("scroll");

                }
            })
        })