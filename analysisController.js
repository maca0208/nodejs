exports.getAnalysis =  (req,res) => {
    res.render('analysisForm');
};

exports.postAnalysis = (req, res) => {
    const text = req.body.text;
    const analysisResult = analyzeText(text);
    res.render('analysisResult', {analysisResult});
};

function analyzeText(text){
    const characterCount = text.length;
    const words = text.match(/\w+/g);
    const wordCount = words ? words.length : 0;
    const sentenceCount = text.split(/[.!?]+/).length - 1;

    let shortWords = 0;
    let longWords = 0;
    let equalWords = 0;
    let vowelWords = 0;

    words.forEach(word => {
        if(word.length < 5)shortWords++;
        else if(word.length > 5) longWords++;
        else equalWords++;

        if(/^[aeiou]/i.test(word)) vowelWords++;
    });

    return {
        characterCount,
        wordCount,
        shortWords,
        longWords,
        equalWords,
        sentenceCount,
        vowelWords
    };
}