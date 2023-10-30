var SpeechRecognition = window.webkitSpeechRecognition();
var recognition = new SpeechRecognition();

function start(){
document.getElementById("textbox").innerHTML="";
recognition.start();

}

recognition.onresult=function(event){
    console.log(event);
    var content= event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    speak();
}

function speak(){
var synth= window.webkitSpeechRecognition;
var speakData= document.getElementById("textbox").value;
var utterThis= new SpeechSynthesisUtterance(speakData);
synth.speak(utterThis);
Webcam.attach(camera);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    jpeg_quality: 90
});

var camera = document.getElementById("camera");

