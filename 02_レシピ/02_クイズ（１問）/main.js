const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

const quiz = {
  text: "ここの都道府県はどこでしょう？",
  image: "Beach.jpg",
  choices: [
    {
      text: "福岡県",
      feedback:
        "正解！ここは福岡県の糸島っていう所にあって今人気の観光地です！",
    },
    {
      text: "鳥取県",
      feedback: "残念！鳥取じゃないんだな～！他の選択肢を選んでみてね",
    },
    {
      text: "徳島県",
      feedback: "残念！徳島県は渦潮が有名だね！",
    },
  ],
}

const reloadQuiz = function() {
  quizText.textContent = "Q." + quiz.text

  quizImage.scr =
    "	https://cdn.zekkei-japan.jp/images/articles/1afa90fa6729e0210874a4e354922956.jpg" +
    quiz.image

  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
}

const choose = function(choiceNumber) {
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function() {
  choose(0)
}
choice2.onclick = function() {
  choose(1)
}
choice3.onclick = function() {
  choose(2)
}

reloadQuiz()
