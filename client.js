const allEmployeeInformation = [];


$(document).ready(init); 

function init() {
    render();  
    $('.js-btn-submit').on('click', addEmployeeInfo); 
}


function addEmployeeInfo() {

    const individualEmployeeInfo = {
        firstName: $('.js-input-firstName').val(), 
        lastName: $('.js-input-lastName').val(),
        idNumber: parseInt( $('.js-input-idNumber').val() ), 
        title: $('.js-input-jobTitle').val(),
        annualSalary: parseInt( $('.js-input-annualSalary').val() )
    }

    $('.js-input-firstName').val(''); 
    $('.js-input-lastName').val(''); 
    $('.js-input-idNumber').val(''); 
    $('.js-input-jobTitle').val(''); 
    $('.js-input-annualSalary').val('');

    allEmployeeInformation.push(individualEmployeeInfo);
    console.log(allEmployeeInformation);

    
    

}

function render() {

}