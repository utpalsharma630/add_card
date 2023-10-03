document.getElementById('btn1').addEventListener('click', function(){
    const price1 = document.getElementById('price1');
    const add1=parseFloat(price1.innerText);
    

    const add = document.getElementById('add');
    const value=parseFloat(add.innerText)


    const newAdd = add1+value;
    add.innerText = newAdd;

    const list1=document.getElementById('list1');
    const nameLists =document.getElementById('nameList')
    const li = document.createElement('li');
    li.innerText=list1.innerText;
    nameLists.appendChild(li)
    


})
document.getElementById('btn2').addEventListener('click', function(){
    const price2 = document.getElementById('price2');
    const add2=parseFloat(price2.innerText);
    

    const add = document.getElementById('add');
    const value=parseFloat(add.innerText)
    

    const newAdd = add2+value;
    add.innerText = newAdd;


    const list2 = document.getElementById('list2');
    const nameLists = document.getElementById('nameList');
    const li = document.createElement('li');
    li.innerText = list2.innerText;
    nameLists.appendChild(li)

})
document.getElementById('btn3').addEventListener('click', function(){
    const price3 = document.getElementById('price3');
    const add3=parseFloat(price3.innerText);
    

    const add = document.getElementById('add');
    const value=parseFloat(add.innerText)
    

    const newAdd = add3+value;
    add.innerText = newAdd;

    const list3 = document.getElementById('list3');
    const nameLists = document.getElementById('nameList');
    const li = document.createElement('li');
    li.innerText = list3.innerText;
    nameLists.appendChild(li)

})