let counter = 0;

function revealinfo() {

  
if(counter <= 0 ){
    document.querySelector('.ThePdfIsPasswordProtectedOnceYourPaymentHasBeenConfirmedYouWillReceiveALinkToThePdfWithThePasswordVIAEmail').style.opacity =  1;
    document.querySelector('.ThePdfIsPasswordProtectedOnceYourPaymentHasBeenConfirmedYouWillReceiveALinkToThePdfWithThePasswordVIAEmail').style.transition =  0.5 + "s" + ' ' + 'ease';
   
   
    document.querySelector('.fa-solid').style.rotate =  45 + "deg";
    document.querySelector('.fa-solid').style.transition =  0.5 + "s" + ' ' + 'ease';
    
     counter++;
} else {
    document.querySelector('.ThePdfIsPasswordProtectedOnceYourPaymentHasBeenConfirmedYouWillReceiveALinkToThePdfWithThePasswordVIAEmail').style.opacity =  0;
    document.querySelector('.ThePdfIsPasswordProtectedOnceYourPaymentHasBeenConfirmedYouWillReceiveALinkToThePdfWithThePasswordVIAEmail').style.transition =  0.5 + "s" + ' ' + 'ease';
   
   
    document.querySelector('.fa-solid').style.rotate =  0 + "deg";
    document.querySelector('.fa-solid').style.transition =  0.5 + "s" + ' ' + 'ease';
    
     counter = 0;
}



}

