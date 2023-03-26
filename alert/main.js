const alert = document.getElementsByClassName("remove")
const send  = document.getElementsByClassName("send")
const remove = document.getElementsByClassName("closebtn")
const alert1 = document.getElementsByClassName('alert')

remove[0].onclick = function(){
   alert1[0].classList.add('remove');
}

send[0].onclick = function(){

    alert[0].classList.add('alert')
    alert[0].classList.remove('remove')
    setTimeout(() => {
        alert1[0].classList.add('remove')
    }, 2000);
}


