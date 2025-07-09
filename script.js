document.getElementById('calculate-btn').addEventListener('click', function() {
    const birthdate = document.getElementById('birthdate').value;
    const errorMsg = document.getElementById('error-msg');
    const resultDiv = document.getElementById('result');
    
    if (!birthdate) {
        errorMsg.style.display = 'block';
        resultDiv.style.display = 'none';
        return;
    }
    
    errorMsg.style.display = 'none';
    
    const today = new Date();
    const birthDate = new Date(birthdate);
    
    if (birthDate > today) {
        errorMsg.style.display = 'block';
        resultDiv.style.display = 'none';
        return;
    }
    
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();
    
    if (ageDays < 0) {
        ageMonths--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += lastMonth.getDate();
    }
    
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }
    
    document.getElementById('age-years').textContent = `Your age: ${ageYears} years`;
    document.getElementById('age-months').textContent = `${ageMonths} months`;
    document.getElementById('age-days').textContent = `and ${ageDays} days`;
    
    resultDiv.style.display = 'block';
});