var songA = new Audio ('audio/Sound For A.mp3')
var songB = new Audio ('audio/Sound For B.mp3')
var songC = new Audio ('audio/Sound For C.mp3')
var songD = new Audio ('audio/Sound For D.mp3')
var songE = new Audio ('audio/Sound For E.mp3')
var songF = new Audio ('audio/Sound For F.mp3')

function checkGrade() {
    var userScore = document.getElementById('score').value
    var newScore = Number(userScore)
    if (userScore === '') {
        errorMsg.style.display = 'block'
    } else {
        errorMsg.style.display = 'none'
        if (newScore >= 0 && newScore <= 40) {
            displayResult.innerText = "F - You failed"
            songF.play()
        } else if (newScore >= 40 && newScore <= 45) {
             displayResult.innerText = 'E - You did not pass but you have Passed'
             songE.play()
         } else if (newScore >= 45 && newScore <= 50) {
             displayResult.innerText = "D - You did not pass but had an Average"
             songD.play()
        } else if (newScore >= 50 && newScore <= 60) {
             displayResult.innerText = "C - You passed but had a Credit"
             songC.play()
        } else if (newScore >= 60 && newScore <= 70) {
            displayResult.innerText = "B - You Passed, and it's very Good"
            songB.play()
        }  else if (newScore >= 100) {
             displayResult.innerText = "A - Congratulations, Excellent!"
             songA.play()
        }
   }
}
