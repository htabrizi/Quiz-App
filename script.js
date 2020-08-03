/**********************************
 **********QUIZ CONTROLLER*********
 *********************************/
var quizController = (function () {
  //************Question Cnstructor*******/
  function Question(id, questionText, options, correctAnswer) {
    this.id = id;
    this.questionText = questionText;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }
  return {
    addQuestionOnLocalStorage: function (newQuestText, opts) {
      var optionsArr, corrAns,questionId,newQuestion;
      optionsArr = [];
      questionId=0;
      for (var i = 0; i < opts.length; i++) {
        if (opts[i].value !== "") {
          optionsArr.push(opts[i].value);
        }
        if (opts[i].previousElementSibling.checked && opts[i] !== "") {
          corrAns = opts[i].value;
        }
      }
      console.log(corrAns);
    }
  };
})();
/**********************************
 **********UI CONTROLLER*********
 *********************************/
var UIControler = (function () {
  var domItems = {
    //********Admin Panel Elements********/
    questInsertBtn: document.getElementById("question-insert-btn"),
    newQuestionText: document.getElementById("new-question-text"),
    adminOptions: document.querySelectorAll("admin-optio")
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
    quizCtrl.addQuestionOnLocalStorage(selectedDomItems.newQuestionText, selectedDomItems.adminOptions)
  });
})(quizController, UIControler);