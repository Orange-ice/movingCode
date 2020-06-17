let html = document.querySelector("#html");

let string = `/* 你好，我叫小冰
* 接下来展示我的前端功底
* 首先我要准备一个div
**/
#div1{
    border: solid 1px red;
    height: 200px;
    width: 200px;
}
/* 接下来我把 div 变成太极八卦图
* 注意看好了
* 首先，把 div 变成一个圆
**/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳形成的
* 一黑一白
**/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(9,9,121,1) 50%, rgba(0,0,0,1) 50%);
}
/* 加俩神秘的小球 */
#div1::before{
    width: 100px;
    height:100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
    width: 100px;
    height:100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%);
}`;
let n = 0;

let string2 = "";

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }

    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    if (n < string.length - 1) {
      n = n + 1;
      step();
    }
  }, 0);
};

step();
