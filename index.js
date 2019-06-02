alert('Hello')
    var li=document.getElementsByTagName('li')
    for(var n=0;n<li.length;n++){
        li[n].addEventListener('click',function(){
            alert(555)
        })
    }
