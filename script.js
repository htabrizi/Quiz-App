/**********************************
 **********QUIZ CONTROLLER*********
 *********************************/
 var quizController = (function () {
 //*********** Question Constructor **************
 function Question (id , questionText , options , correctAnswer ){
  this.id=id;
  this.questionText=questionText;
  this.options=options ;
  this.correctAnswer=correctAnswer;
  return {
   addQuestionOnLocalStorage:function(newQuestText,options){
    console.log('hi')
   }
  }
 }
})();  
/**********************************
 **********UI CONTROLLER*********
 *********************************/
var UIControler =(function(){
 var  domItems ={
  //**************** Admin Panel Elements**************
  questInsertBtn:document.getElementById("question-insert-btn"),
  newQuestionText:document.getElementById("new-question-text"),
  adminOptions:document.querySelectorAll(".admin-option")
 };
 return{
  getDomItems : domItems
  };
})();
/**********************************
 ********** CONTROLLER*********
 *********************************/
var controller =(function (quizCtrl,UICtrl){
 var selectedDomItems=UICtrl.getDomItems;
selectedDomItems.questInsertBtn.addEventListener('click',function () {
quizCtrl.addQuestionOnLocalStorage(selectedDomItems.newQuestionText,selectedDomItems.adminOptions);
});
   
})(quizController,UIControler);
