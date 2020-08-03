/**********************************
 **********QUIZ CONTROLLER*********
 *********************************/
var quizController = (function () {
  //*********** Question Constructor **************
  function Question(id, questionText, options, correctAnswer) {
    this.id = id;
    this.questionText = questionText;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }
  var questionLocalStorage = {
    setQuestionCollection: function (newCollection) {
      localStorage.setItem('questionCollection', JSON.stringify(newCollection));
    },
    getQuestionCollection: function () {
      return JSON.parse(localStorage.getItem('questionCollection'));
    },
removeQuestionCollection:function(){
  localStorage.removeItem('questionCollection');
}
  };
  return {
    addQuestionOnLocalStorage: function (newQuestText, opts) {
      var optionsArr, corrAns, questionId, newQuestion, getStoredQuests;
      if(questionLocalStorage.getQuestionCollection()===null){
        questionLocalStorage.setQuestionCollection([]);
      }
      optionsArr = [];
 
      for (var i = 0; i < opts.length; i++) {
        if (opts[i].value !== "") {
          optionsArr.push(opts[i].value);
        }
        if (opts[i].previousElementSilbling.checked && opts[i].value !== "") {
          corrAns = opts[i].value;
        }
      } 
      //[{id: 0} {id: 0}]
      if(questionLocalStorage.getQuestionCollection().length>0){
        questionId=questionLocalStorage.getQuestionCollection()[questionLocalStorage.getQuestionCollection().length-1].id+1;
      }else{
        questionId=0;
      }
      newQuestion = new Question(questionId, newQuestionText.value, optionsArr, corrAns);
      getStoredQuests =questionLocalStorage.getQuestionCollection();
      getStoredQuests.push(newQuestion);
      questionLocalStorage.setQuestionCollection(getStoredQuests);
      console.log(questionLocalStorage.getQuestionCollection());
    }
  };
})();
/**********************************
 **********UI CONTROLLER*********
 *********************************/
var UIControler = (function () {
  var domItems = {
    //**************** Admin Panel Elements**************
    questInsertBtn: document.getElementById("question-insert-btn"),
    newQuestionText: document.getElementById("new-question-text"),
    adminOptions: document.querySelectorAll(".admin-option")
  };
  return {
    getDomItems: domItems
  };
})();
/**********************************
 ********** CONTROLLER*********
 *********************************/
var controller = (function (quizCtrl, UICtrl) {
  var selectedDomItems = UICtrl.getDomItems;
  selectedDomItems.questInsertBtn.addEventListener('click', function () {
    quizCtrl.addQuestionOnLocalStorage(selectedDomItems.newQuestionText, selectedDomItems.adminOptions);
  });

})(quizController, UIControler);