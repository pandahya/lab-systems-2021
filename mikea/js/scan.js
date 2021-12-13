const scan = document.getElementById("scan");
const address = document.getElementById("scan_address");
const payment = document.getElementById("scan_payment");
const span = document.getElementsByClassName("close")[0];

address.onclick = function(){
    scan.style.display = "block";
    camera();
}
payment.onclick = function(){
    scan.style.display = "block";
    camera();
}
span.onclick = function(){
    scan.style.display = "none";
    closeCam();
}
window.onclick = function(event){
    if(event.target == scan){
        scan.style.display = "none";
        closeCam();
    }
}
//https://www.digitalocean.com/community/tutorials/front-and-rear-camera-access-with-javascripts-getusermedia

let constraints = {
    video: {
        width: {
          min: 427,
          ideal: 640,
          max: 1280,
        },
        height: {
          min: 240,
          ideal: 360,
          max: 720
        },
        facingMode: 'user'
      }
}
const video = document.querySelector('video');
const mediaStream = video.srcObject;
function camera(){
    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(mediaStream) {
        // let video = document.querySelector('video');
        video.srcObject = mediaStream;
        video.onloadedmetadata = function(e) {
            video.play();
        };
        console.log('hi');
    })
    .catch(function(err) { console.log(err.name + ": " + err.message); });
}

//https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/stop
//https://developers.google.com/web/updates/2015/07/mediastream-deprecations?hl=en#stop-ended-and-active
function closeCam(){
    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(mediaStream){
        const track = mediaStream.getTracks();
        track[0].stop();
        console.log('bye');
    },
    function(error){
        console.log('getUserMedia() error', error);
    });
    video.srcObject = null;
    console.log('bye2');
}