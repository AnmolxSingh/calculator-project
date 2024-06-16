
let nums=[]

let i=0
let op 
var vari=document.getElementById("display")

function appendToDisplay(a){
    vari.innerText=a
    if(a=='/'||a=='+'||a=='-'||a=='*'||a=='%'){
        op=i
    }
    nums[i]=a
    i++
}


function calculate(){
    let num1=0
    let num2=0
    let itr=0
    while(itr<op){
        num1=num1*10+nums[itr]
        itr++
    }
    itr=op+1
    while(itr<nums.length){
        num2=num2*10+nums[itr]
        itr++
    }
    itr=0
    answer(num1,num2)
}

function clearDisplay(){
    vari.innerText=0
    nums=[]
    console.log(nums)
    i=0
}

function answer(num1,num2){
    if(nums[op]=='+'){
        vari.innerText=num1+num2
    }

    if(nums[op]=='-'){
        vari.innerText=num1-num2
    }

    if(nums[op]=='*'){
        vari.innerText=num1*num2
    }

    if(nums[op]=='/'){
        vari.innerText=num1/num2
    }

    if(nums[op]=='%'){
        vari.innerText=(num1/100)*num2
    }

    if(nums[op]=='+'){
        vari.innerText=num1+num2
    }
}