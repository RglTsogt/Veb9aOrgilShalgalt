let y = 0;
let x = 0;
function upd(){
    y = y + 1;
    x = x + 1;
    if(y % 3 == 1){
        document.getElementById("myParagraph").style.backgroundColor= 'navy';
        document.getElementById("shape").src= 'https://t4.ftcdn.net/jpg/01/77/67/85/360_F_177678515_ZCqLyYIR7OEzb0zy3Q8Tu0I9Af00j4Z9.jpg';
    }
    if(y % 3 == 2){
        document.getElementById("myParagraph").style.backgroundColor= 'green';
        document.getElementById("shape").src= 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTSLbSBTWbZyQJ71kVaEbbnieEx7xGM1hk2NvI7ZrZ0TJNkRsv9NwmxBmaiMJcvHdxc';
    }
    if(y % 3 == 0){
        document.getElementById("myParagraph").style.backgroundColor= 'teal';
        document.getElementById("shape").src= 'https://cdn-icons-png.flaticon.com/512/32/32463.png';
    }
    if(x % 2 == 1){
        document.getElementById("chipi").src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqrC1oOo1xiHD8CyyjlBL21XFFFqFD02mjxw&usqp=CAU';
    }
    if(x % 2 == 0){
        document.getElementById("chipi").src= 'data:image/jpeg;base64,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';
    }
    if(x % 4 == 0){
        document.getElementById("colorButton").style.fontSize = '12px';
    }
    if(x % 4 == 1){
        document.getElementById("colorButton").style.fontSize = '16px';
    }
    if(x % 4 == 2){
        document.getElementById("colorButton").style.fontSize = '24px';
    }
    if(x % 4 == 3){
        document.getElementById("colorButton").style.fontSize = '16px';
    }
}
