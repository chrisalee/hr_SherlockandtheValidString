/*
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

const isValid = (s) => {
    let frequencyMap = {};
    s.split('').forEach((char) => {
        if (!frequencyMap[char]) frequencyMap[char] = 1;
        else frequencyMap[char]++;
    });
    
    let occurances = Object.values(frequencyMap).sort((a, b) => a - b);
    let removeOneFromLeft = [occurances.at(0) - 1, ...occurances.slice(1)].filter((num => num !== 0));
    let removeOneFromRight = [...occurances.slice(0, occurances.length - 1), occurances.at(-1) - 1];
    
    if([...new Set(occurances)].length === 1 || [...new Set(removeOneFromLeft)].length === 1 || [...new Set(removeOneFromRight)].length === 1) return "YES";
    
    return "NO";
}
