

function changeCharacterWithProximity(str, n){
    let result = [];
    for(let char of str){
        if(/[a-zA-Z]/.test(char)){
            let code = char.charCodeAt(0)
            let base = (code >= 65 && code <= 90) ? 65 : 97;

            let proximityChar = String.fromCharCode(((code - base + n) %26) + base);
            result.push(proximityChar);
        }else{
            result.push(char)
        }

    }
    return result.join('');
}

console.log(changeCharacterWithProximity("Hello, My = friend!!", 1))

// function pascalToSnake (str){
//     str = str.split(/(?=[A-Z])/);

//     return str.join('-').toLowerCase()
// }

// console.log(pascalToSnake("ThisIsAGoodStart"))


// function findFirstCap(str){
//     str = str.split('');

//     let result = {};
//     for(element of str){
//         result[element] = (result[element] || 0) + 1;
//     }

//     for(let element of str){
//         if(element === element.toUpperCase() && element !== element.toLowerCase()){
//             return element
//         }
//     }

//     return null;
// }

// console.log(findFirstCap("tHisSko"))


// function findSingleOccurance(str){
//     str = str.split('');

//     let result = {};
//     for(element of str){
//         result[element] = (result[element] || 0) +1;
//     }

//     for(let element of str){
//         if(result[element] === 1){
//             return element
//         }
//     }

//     return null;
// }

// console.log(findSingleOccurance("thisislhsst"))




// function removeDup(str){
//     str = str.split('');

//     let result =[];

//     for(let i =0; i<= str.length; i++){
//         if(str[i] !== str[i+1] && !result.includes(str[i])){
//             result.push(str[i])
//         }
         
//     }
//     return result.join('');
// }

// console.log(removeDup("ajnismmsa"))


// function checkPalindrom(str){
//     str = str.split('');

//     let newStr = [];

//     for(let i = str.length -1; i >= 0 ;i--){
//         newStr.push(str[i])
//     }

//     return str.join('') === newStr.join('')
// }

// console.log(checkPalindrom("issii"))