## 💫About Me :
<svg fill="none" viewBox= "0 0 1200 750"  with ="1200" height = "750 " xmlns="http://www.w3.org/2000/svg">
<foreignObject width="100%" height="100%">
<div xmlns ="http://www.w3.org/1999/xhtnl">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pure CSS Drawing</title>

<style>
:root{
    --eye-size:100px;
    --eye-backcolor: #ad0000;
    --eye-color: #000;
    --eye-shadow: #adadad59;
    --eyeball-shadow: rgb(27 27 27);
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    background: black;
}

.card{
    width: 300px;
    height: 300px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.circle{
    border-radius: 50%;
}

.center{
    margin: 50%;
    transform: translate(-50%, -50%);
}

.eye{
    height: var(--eye-size);
    width: var(--eye-size);
    background-color: var(--eye-backcolor);
    border: 6px solid var(--eye-color);
    position: relative;
}

.eyeball{
    height: 55%;
    width: 55%;
    position: relative;
}

.eyeball>div:first-of-type{
    height: 100%;
    width: 100%;
    border: 4px solid var(--eye-color);
    opacity: 0.5;
    position: absolute;
}

.eyeball>div:nth-of-type(2){
    position: absolute;
    height: 45%;
    width: 45%;
    background-color: var(--eye-color);
    box-shadow: 0 0 21px 3px var(--eyeball-shadow);
}

.sp{
    height: 50%;
    width: 50%;
    position: absolute;
    font-size: 65px;
}

.sp span{
    font-weight: bolder;
    position: absolute;
    display: block;
    top: -44px;
    color: var(--eye-color);
}

.eyeball>div:nth-of-type(3){
    top: -46%;
    left: 66%;
    transform: rotate(243deg);
}

.eyeball>div:nth-of-type(4){
    bottom: -46%;
    right: -20%;
    transform: rotate(-1deg);
}

.eyeball>div:last-of-type{
    bottom: 18%;
    left: -60%;
    transform: rotate(112deg);
}

.sharingan1{
    animation: animation1 10s ease-in-out infinite;
    animation-fill-mode: forwards;
}

.sharingan1, .sharingan2 {
    display: none;
}

.sharingan2 .sp{
    width: 100%;
    height: 100%;
    font-size: 165px;

}

.sharingan2 .eyeball>div:first-of-type{
    opacity: 1;
    background-color: var(--eye-color);
    width: 85%;
    height: 85%;
    margin: 50%;
    transform: translate(-50%, -50%);
}

.sharingan2 .eyeball>div:nth-of-type(2){
    background-color: var(--eye-backcolor);
    z-index: 7777;
    width: 25%;
    height: 25%;
}

.sharingan2 .eyeball>div:nth-of-type(3){
    top: -15%;
    left: 12%;
}

.sharingan2 .eyeball>div:nth-of-type(4){
    bottom: -16%;
    right: -9%;
}

.sharingan2 .eyeball>div:last-of-type{
    bottom: 4%;
    left: -17%;
}

.sharingan2{
    animation: animation1 10s ease-in-out infinite;
}

.sharingan1to2, .eyeball>div{
    animation-duration: 10s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    animation-delay: 3s;
}

.sharingan1to2{
    animation: animation1 12s ease-in-out infinite;
    animation-fill-mode: both;
}

.sharingan1to2 .eyeball>div:first-of-type{
    animation-name: an_div_first;
}

.sharingan1to2 .eyeball>div:nth-of-type(2){
    animation-name: an_div2;
}

.sharingan1to2 .eyeball>div:nth-of-type(3){
    animation-name: an_div3;
}

.sharingan1to2 .eyeball>div:nth-of-type(4){
    animation-name: an_div4;
}

.sharingan1to2 .eyeball>div:last-of-type{
    animation-name: an_div_last;
}

/*ANIMATIONS*/
@keyframes animation1 {
    0%{transform: rotate(0deg);}
    70%,100%{transform: rotate(360deg);}
}

/*TRANSITION ANIMATION*/

@keyframes an_div_first {
    0%,30%,80%,100%{
        /*sharingan1*/
        height: 100%;
        width: 100%;
        background-color: var(--eye-backcolor);
        opacity: 0.5;
    }
    40%,70%{
        /*sharingan2*/
        opacity: 1;
        background-color: var(--eye-color);
        width: 85%;
        height: 85%;
        margin: 50%;
        transform: translate(-50%, -50%);
    }
}

@keyframes an_div2 {
    0%,30%,80%,100%{
        /*sharinn 1*/
        height: 45%;
        width: 45%;
        background-color: var(--eye-color);
        z-index: auto;
    }
    40%,70%{
        /*sharingan 2*/
        background-color: var(--eye-backcolor);
        z-index: 7777;
        width: 25%;
        height: 25%;
    }
}

@keyframes an_div3 {
    0%,30%,80%,100%{
        /*sharingan 1*/
        top: -46%;
        left: 66%;
        width: 50%;
        height: 50%;
        font-size: 65px;
    }
    40%,70%{
        /*sharingan 2*/
        top: -15%;
        left: 12%;
        width: 100%;
        height: 100%;
        font-size: 165px;
    }
}

@keyframes an_div4 {
    0%,30%,80%,100%{
        /*sharingan 1*/
        bottom: -46%;
        right: -20%;
        width: 50%;
        height: 50%;
        font-size: 65px;
    }
    40%,70%{
        /*sharingan 2*/
        bottom: -16%;
        right: -9%;
        width: 100%;
        height: 100%;
        font-size: 165px;
    }
}

@keyframes an_div_last {
    0%,30%,80%,100%{
        /*sharingan 1*/
        bottom: 18%;
        left: -60%;
        width: 50%;
        height: 50%;
        font-size: 65px;
    }
    40%,70%{
        /*sharingan 2*/
        bottom: 4%;
        left: -17%;
        width: 100%;
        height: 100%;
        font-size: 165px;
    }
}

.box{
    overflow: hidden;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px auto;
}

.eye-box{
    background-color: #fff;
    width: 220px;
    height: 130px;
    position: relative;
    overflow: hidden;
    display: flex;
    padding-top: 10px;
    margin: auto 40px;
    justify-content: center;
    align-items: center;
    border-radius: 100% 0 54% 46% / 93% 1% 99% 7%;
    box-shadow: -4px 21px 1px 6px var(--eye-shadow) inset;
    animation: eye_animation 16s ease-in-out infinite;
    transition: height 0.5s ease-in-out,
                padding-top 0.5s ease-in-out;
}

.left-eye{
    transform: scaleX(-1);
}

.eye-box.eye{
    position: absolute;
    top: 5%;
    right: 10%;
}

/*ANIMATIONS EYE OPEN CLOSE*/

@keyframes eye_animation {
    0%,36%,55%,100%{
        height: 130px;
        padding-top: 20px;
    }
    43%,47%{
        height: 0;
        padding: 0;
    }
}


</style>
</head>
<body>
  <div class="box">
        <div class="eye-box left-eye">
            <div class="eye circle sharingan1to2">
                <div class="eyeball center">
                    <div class="circle"></div>
                    <div class="circle center"></div>
                    <div class="sp"><span class="center">,</span></div>
                    <div class="sp"><span class="center">,</span></div>
                    <div class="sp"><span class="center">,</span></div>
                </div>
            </div>
        </div>
        <div class="eye-box">
            <div class="eye circle sharingan1to2">
                <div class="eyeball center">
                    <div class="circle"></div>
                    <div class="circle center"></div>
                    <div class="sp"><span class="center">,</span></div>
                    <div class="sp"><span class="center">,</span></div>
                    <div class="sp"><span class="center">,</span></div>
                </div>
            </div>
        </div>
    </div>

  <div class="card">
        <div class="eye circle sharingan1">
            <div class="eyeball center">
                <div class="circle"></div>
                <div class="circle center"></div>
                <div class="sp"><span class="center">,</span></div>
                <div class="sp"><span class="center">,</span></div>
                <div class="sp"><span class="center">,</span></div>
            </div>
        </div>
        <div class="eye circle sharingan2">
            <div class="eyeball center">
                <div class="circle"></div>
                <div class="circle center"></div>
                <div class="sp"><span class="center">,</span></div>
                <div class="sp"><span class="center">,</span></div>
                <div class="sp"><span class="center">,</span></div>
            </div>
        </div>
        
</div>
</body>
</html>

</div>
</foreignObject>
</svg>
<h2 align="center">🛠 Technologies and Tools 🛠</h2>

## 🌐Socials
[![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&logoColor=white)](https://facebook.com/https://www.facebook.com/nguyentunglamICTU) [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/https://www.linkedin.com/in/nguy%E1%BB%85n-l%C3%A2m-606133229/) 

# 💻Tech Stack
![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![Anaconda](https://img.shields.io/badge/Anaconda-%2344A833.svg?style=for-the-badge&logo=anaconda&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Symfony](https://img.shields.io/badge/symfony-%23000000.svg?style=for-the-badge&logo=symfony&logoColor=white) ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white) ![Apache](https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![MicrosoftSQLServer](https://img.shields.io/badge/Microsoft%20SQL%20Sever-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white) 	![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
# 📊GitHub Stats :
![](https://github-readme-stats.vercel.app/api?username=88vipProdev&theme=radical&hide_border=true&include_all_commits=true&count_private=false)<br/>
![](https://github-readme-streak-stats.herokuapp.com/?user=88vipProdev&theme=radical&hide_border=true)<br/>
![](https://github-readme-stats.vercel.app/api/top-langs/?username=88vipProdev&theme=radical&hide_border=true&include_all_commits=true&count_private=false&layout=compact)

## 🏆GitHub Trophies
![](https://github-trophies.vercel.app/?username=88vipProdev&theme=radical&no-frame=false&no-bg=false&margin-w=4)

<img src="image/avtuchia.jpg" width="300px">              <img src="image/uchihaicon.jpg" width="300px">

---
[![](https://visitcount.itsvg.in/api?id=88vipProdev&icon=0&color=0)](https://visitcount.itsvg.in)
