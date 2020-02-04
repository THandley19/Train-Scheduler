// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCM-W1bft1pBjHJxxakFiTG-wJ4jbXWTXM",
    authDomain: "train-scheduler-91c6e.firebaseapp.com",
    databaseURL: "https://train-scheduler-91c6e.firebaseio.com",
    projectId: "train-scheduler-91c6e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var dataRef = firebase.database();

var trainName = "";
var destination = "";
var firstTrainTime = "";
var freq = 0;

$("#submit-button").on("click", function(event) {
    event.preventDefault();

    trainName = $("#train-name").val().trim();
    destination = $("#train-destination").val().trim();
    firstTrainTime = $("#train-time").val().trim();
    freq = $("#train-frequency").val().trim();

    console.log(trainName);
    console.log(destination);
    console.log(firstTrainTime);
    console.log(freq);

    dataRef.ref().push({
        TrainName: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: freq
    })

    
})