var quizController = (function () {
  var private = 10;
  var privateFn = function (a) {
    return a + private;
  };
  return { 
      publicMethod:function(){
      return privateFn(20);
  } };
})();
var UIControler   =(function(){
    var num1=30;
    return{
        sum:function(num2){
            return num1+num2;
        }
    }
})();
var controller =(function (quizCtrl,UICtrl){
    console.log(UICtrl.sum(100)+quizController.publicMethod);
})(quizController,UIControler);