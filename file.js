

var likeButtons=document.querySelectorAll('.like-btn');
var miusButtons=document.querySelectorAll('.minus-btn');
var plusButtons=document.querySelectorAll('.plus-btn');
var pricesItems=document.querySelectorAll('.total-price');
var sumOfItems=document.querySelectorAll('.total');
console.log(sumOfItems);
console.log(pricesItems)
console.log(plusButtons);
console.log(miusButtons);
console.log(likeButtons);
//like items
for(var i=0;i<likeButtons.length;i++)
{
    likeButtons[i].addEventListener('click',function()
    {
        this.classList.toggle("is-active");
        console.log(this);
    })
}
//deccrease items
for(var i=0;i<miusButtons.length;i++)
{
    miusButtons[i].addEventListener('click',function(event)
    {
     event.preventDefault();
     var valueInput=event.target.parentElement.previousElementSibling;
     var priceOfitem=event.target.parentElement.parentElement.nextElementSibling
     var priceWithoutDollars= priceOfitem.innerText.substring(1);//without dollars
     var valueWithoutDollarsToInt=parseInt( priceWithoutDollars);
     const priceofBegin=valueWithoutDollarsToInt;
     console.log(priceofBegin);

     var value=parseInt(valueInput.value);
     if(value>1)
     {
         value=value-1;
     }
     valueInput.setAttribute('value',value)
        var newValueOfitem=valueInput.value*priceofBegin;
        console.log(valueInput);
        console.log(priceOfitem);
        console.log(newValueOfitem);
     
    })
}
//increase items 

for (var i=0;i<plusButtons.length;i++)
{
    plusButtons[i].addEventListener('click',function(event)
    { 
        event.preventDefault();
        var valueInput=event.target.parentElement.nextElementSibling;
        var priceOfitem=event.target.parentElement.parentElement.nextElementSibling
        var priceWithoutDollars= priceOfitem.innerText.substring(1);//without dollars
        var valueWithoutDollarsToInt=parseInt( priceWithoutDollars);
        const priceofBegin=valueWithoutDollarsToInt;
        console.log(priceofBegin);
        
        //var price
        var value=parseInt(valueInput.value);
        if(value>=1)
        {
            value=value+1;
        }
       
        //valueInput.val()=value;
        valueInput.setAttribute('value',value)
        var newValueOfitem=valueInput.value*priceofBegin;
        var sumOfarticles=+newValueOfitem;
        var sumOfItemswithoutDollars=sumOfItems.innerText.substring(1);
         console.log(sumOfItemswithoutDollars)

        console.log( sumOfarticles);
        console.log(valueInput);
        console.log(priceOfitem);
        console.log(newValueOfitem);
       // console.log(newValueOfitem.toString());
        //priceOfitem.innerHTML=newValueOfitem;
        
         
       
        
        

    })
}