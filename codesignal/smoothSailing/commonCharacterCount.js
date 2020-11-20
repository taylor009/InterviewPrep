/**
 *
 * @param s1 = "aabcc"
 * @param s2  = "adcaa"
 * return = common characters = 3
 */
function commonCharacterCount(s1, s2) {
    let count = 0;

    //Converts second string into an array
    const obj = s2.split("");
    //Iterates over the first input string and finds a match inside the second inputs string character array.
    for(str of s1){
        let idx = obj.findIndex(s => s === str);
        if(idx >= 0) {
            count++;
            obj.splice(idx, 1);
        }
    }
    return count;
}
