function longestWord(word){
    let words = word.split(" ");
    let longest = "";
    for (let sent of words){
        if(sent.length > longest.length){
            longest = sent;
        }
    }
    return longest;
}

console.log(longestWord("The quicks brown fox jumps over the lazy dog"))