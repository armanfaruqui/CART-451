
const natural = require('natural')


class myBayesianClass{



    constructor(){

        this.classifier = new natural.BayesClassifier();

    }
    setInput(inputFromClient){
        console.log("in Bayseian class");
        console.log(inputFromClient);
    }

    // TRAINING DATA 

    // SABINE :: need to prefix everything with this...

    //heartbreak
    this.classifier.addDocument("I miss him her them", "relationship")
    this.classifier.addDocument("I hate myself", "selflove")
    this.classifier.addDocument("I hate him her them", "relationship")
    this.classifier.addDocument("I feel alone", "lonely")
    this.classifier.addDocument("I am lonely", "lonely")
    this.classifier.addDocument("I need a hug", "lonely")
    this.classifier.addDocument("sex", "relationship")
    this.classifier.addDocument("touch", "relationship")
    this.classifier.addDocument("I wish", "selflove")
    this.classifier.addDocument("heal", "selflove")
    this.classifier.addDocument("call", "relaionship")
    this.classifier.addDocument("still love", "relationship")
    // this.classifier.addDocument("", "")
    this.classifier.addDocument("attatched attatchment", "relationship")
    this.classifier.addDocument("I miss my mom dad pet dog cat sister brother friend", "family")

    //TRAIN
    classifier.train();

    console.log(classifier.classify("I want to heal"))

}

module.exports  = myBayesianClass;


