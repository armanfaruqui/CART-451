var classifier = new natural.BayesClassifier();

var inputField = document.getElementById("input");
var sendButton = document.getElementById("send")


// TRAINING DATA

// heartbreak
// classifier.addDocument("I miss him her them", "sad")
// classifier.addDocument("I hate myself", "")
// classifier.addDocument("I hate him her them", "")
// classifier.addDocument("I feel alone", "")
// classifier.addDocument("I am lonely", "")
// classifier.addDocument("I need a hug", "")
// classifier.addDocument("sex", "")
// classifier.addDocument("touch", "")
// classifier.addDocument("I wish", "")
// classifier.addDocument("heal", "")
// classifier.addDocument("call", "")
// classifier.addDocument("still love", "")
// classifier.addDocument("pain", "")
// classifier.addDocument("attatched attatchment", "")
// classifier.addDocument("", "")
// classifier.addDocument("", "")
// classifier.addDocument("", "")

// grief
// classifier.addDocument("I miss my mom dad pet dog cat sister brother friend", "")
// classifier.addDocument("", "")
// classifier.addDocument("", "")
// classifier.addDocument("", "")
// classifier.addDocument("", "")
// classifier.addDocument("", "")
// classifier.addDocument("", "")
// classifier.addDocument("", "")

// Get user input
sendButton.addEventListener("click", getInput)

function getInput(){
    console.log(inputField.value)
}


// TRAIN
// classifier.train();

// console.log(classifier.classify(""))