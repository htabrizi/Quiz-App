/**********************************
 **********QUIZ CONTROLLER*********
 *********************************/
 var quizController = (function () {
localStorage.setItem('data',JSON.stringify([1,2,3,4]));
localStorage.removeItem('data');
console.log(JSON.parse( localStorage.getItem('data')));
})();
/**********************************
 **********UI CONTROLLER*********
 *********************************/
var UIControler   =(function(){
 
})();
/**********************************
 ********** CONTROLLER*********
 *********************************/
var controller =(function (quizCtrl,UICtrl){
   
})(quizController,UIControler);