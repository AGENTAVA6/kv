var synth = window.speechSynthesis;
speak_data = "Welcome!!!.     to     the    hand     gesture     Web    app.        Here      you     can     show     the       following     emojies    and     the     computer     will     automaticly      recognise     it. There   are  three  types    of     emojies     the    computer    can reconginise. Good     ,    bad    and   victory.  have     a       good        time       playing       with       it ";
var utterthis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterthis);
Webcam.set({
    height: 300,
    width: 350,
    image_quality: 'jpg'
})
camera = document.getElementById("camera")
Webcam.attach('#camera')
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "capurted_image" src = "'+data_uri+'">'
    })
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ccKAwSUfQ/model.json',modelLoaded);
