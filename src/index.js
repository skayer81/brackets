module.exports = function check(str, bracketsConfig) {
  
  let  openBrackets = '',
        closeBrackets = '';
  bracketsConfig.forEach(element => {
    openBrackets += element[0];
    closeBrackets += element[1]
  });    

  let i = 1;
  
  while(str != ''){
    if (closeBrackets.includes(str[i])){
      if (str[i-1] === openBrackets[closeBrackets.indexOf(str[i])]){
        str = str.slice(0, i-1) + str.slice(i+1);
        i -= 2;
      }
    } 
    if (i > str.length) return false;
    i++;
  }   
  return true;
} 
