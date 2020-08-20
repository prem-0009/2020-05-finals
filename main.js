const makeRunOn = function(sentences){
  const newSentences = sentences.split('')
  return newSentences.map((element, index, arr)=>
  arr[index] === '.' && index !== arr.length -1 ?
  element = ',' : element).join('')
  
}


const totalScore = function(arrObjScores, plusMulti, third){
  const k = arrObjScores.map((element)=>element.score)
 
  const hi =  k.reduce((pre, curr) =>  pre + curr )
  if (plusMulti > 1 && third){ 
    return hi * plusMulti+third
  } else if (plusMulti > 1 && !third){
    return hi * plusMulti;
  }else if (arrObjScores && plusMulti && third){
    return hi + third;
  }  else if (arrObjScores && plusMulti && !third){
    return hi ;
  }else if (!plusMulti){
    return hi;
  }
  
}

//3 nightOwls
const nightOwls = function(arrObj){
  return arrObj.filter((element, index, arr) => {
    if (arr[index].localTime >= 100 && arr[index].localTime <=400 
      && !arr[index].asleep){
      return element
    }
  })
}

//4 getToBed
const getToBed = function(people){
  let people1 = people.splice(0,0);
for ( let i = 0; i< people.length; i++){
  people1.push(people[i])
}


  for ( let i = 0; i < people1.length; i++){ 
    
    if (people1[i].localTime >=100 && people1[i].localTime <=400){
      people1[i].asleep = true
    }
    
  }

  return people1
}

//4 findIndices
const findIndices = function(arr, callBack){
  const result = [];
  for ( let i = 0; i < arr.length; i++){
    if (callBack(arr[i])){
      result.push(i)
    }
  }

  return result;
}

//5 faqtory
const Faqtory = function(){
  let obj = {
    questions : [],
    // addQuestion : function(){
    //    this.questions[0]= {'What is your site all about?'};
    // this.questions[1] = {'How can I help?'},
    //  this.questions[2] = 'What is your site all about?',
      
    // }
  }
  

  return obj;
}


// 'What is your site all about?','How can I help?','What is your site all about?' 




if (typeof makeRunOn === 'undefined') {
  makeRunOn = undefined;
}

if (typeof nightOwls === 'undefined') {
  nightOwls = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof getToBed === 'undefined') {
  getToBed = undefined;
}

if (typeof findIndices === 'undefined') {
  findIndices = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}

module.exports = {
  makeRunOn,
  nightOwls,
  totalScore,
  getToBed,
  findIndices,
  Faqtory,
}
