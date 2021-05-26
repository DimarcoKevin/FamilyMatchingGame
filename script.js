$(document).ready(function() {

    var questions = 8
    var answers = 3
    

    getQuestions()
    
    // main function to use jquery to append questions
    $(".page").append(
        `<div class="name">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br><br>
        </div>`
    )

    for (var i = 1; i <= questions; i++) {   
        $(".page").append(
            `<div class="Question" id="Q${i}">
            <h3>Question ${i}: </h3>`
        )
        for (var j = 1; j <= answers; j++) {
            $(".page").append(
            `<label for="Q${i}A${j}">Answer ${j}:</label>
            <input type="text" id="Q${i}A${j}" name="Q${i}A${j}"><br><br>`
            )
        }
    }
});

function getQuestions() {

    $.ajax({
        dataType: "json",
        url: "questions.json",
        success: function(data) {
            var questions = data.questions
            var items = []
            $.each(questions, function(key, val) {
                items.push(val)
                console.log(val)
            });
        }
    });
    console.log("ajax")

}
