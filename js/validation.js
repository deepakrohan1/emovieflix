/**
 * Created by rohan on 6/11/16.
 */



var userCreations = function () {
    firebase.auth().createUserWithEmailAndPassword("rohan@gmail.com","123456").catch(function(error){

        var errorCode = error.code;
        var errorMessage = error.message;
        if(errorCode != null){
            alert(errorMessage);
        }

        console.log(errorCode +":" +errorMessage);
    })
}