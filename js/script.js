// document.getElementById('errortext').innerHTML = '';
function initMap() {
        var uluru = {lat: 18.575324, lng: 73.766008};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
          // mapTypeId: 'satellite'
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
}
function notempty1(){
    var fname = document.getElementById('fname').value;
    if(fname==''){
      document.getElementById('fname').style = "border:1px solid red";
    }
    else{
      document.getElementById('fname').style = "border:0px solid red";
    }
};
function focusaftererror1(){
  if(fname!=''){
  document.getElementById('fname').style = "border:0px solid red";
  }
};


function notempty2(){
    var lname = document.getElementById('lname').value;
    if(lname==''){
      document.getElementById('lname').style = "border:1px solid red";
    }
    else{
      document.getElementById('lname').style = "border:0px solid red";
    }
};
function focusaftererror2(){
  if(lname!=''){
  document.getElementById('lname').style = "border:0px solid red";
  }
};


function notempty3(){
    
    var phone = document.getElementById('phone').value;
    var numberTrueOrFalse = isNaN(phone);
    if(numberTrueOrFalse==true || phone==''){
      document.getElementById('phone').style = "border:1px solid red";
    }
    else{
      document.getElementById('phone').style = "border:0px solid red";

    }
};
function focusaftererror3(){
  if(phone!=''){
  document.getElementById('phone').style = "border:0px solid red";
  }
};



function notempty4(){
    var email = document.getElementById('email').value;
    if(email==''){
      document.getElementById('email').style = "border:1px solid red";
    }
    else{
      document.getElementById('email').style = "border:0px solid red";
    }
};
function focusaftererror4(){
  if(lname!=''){
  document.getElementById('lname').style = "border:0px solid red";
  }
};


function animatebutton(){
  document.getElementById('regbutton').style="border-color:#00897b;background-color:#00897b;color:#fff;";

}

function UNanimatebutton(){
  document.getElementById('regbutton').style="border-color:#00897b;color:#fff;";

}