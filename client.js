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
    render(); 
}

function render() { 
    console.log('render');
    
    const tableElement = $('.js-table-data');
    tableElement.empty(); 

    for (let i = 0; i < allEmployeeInformation.length; i++) {
        const employee = allEmployeeInformation[i]; 
        
        tableElement.append(`<tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td> 
            <td>${employee.idNumber}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td> 
            </tr>`); 
    }
}
