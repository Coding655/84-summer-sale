function getInputValue(inputId){

    const inputFieldId = document.getElementById(inputId);
    const inputFieldInnerText = inputFieldId.innerText;
    const inputFieldString = parseFloat(inputFieldInnerText);
    return inputFieldString;

} 

function setTheValueById(inputId, elementId){

    const elementField = document.getElementById(inputId);
    elementField.innerText = elementId;
}
function OnClickHandler(){
    const firstProductId = getInputValue('product-1');
    const Discount = firstProductId * 5/100;
    setTheValueById('total-items',firstProductId,Discount, 'discount-id');
    // setTheValueById(Discount, 'discount-id');
}

