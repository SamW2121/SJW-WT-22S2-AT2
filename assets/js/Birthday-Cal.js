
    let dayCount = document.getElementById('DoB-Day');
    let monthCount = document.getElementById("DoB-Month");
    let yearCount = document.getElementById("DoB-Year");

    let calculationString = document.getElementById('calculation-results')
    let birthdayString = document.getElementById('birthday-message')
    let birthdayStrings = ["Happy Birthday \n [English]","Congratulations its your birthday\n [English]","Did you know todays your birthday\n [English]","Woah its your birthday\n [English]"]
function fillListStart()
{

    let days = 32;
    let months = 13;
    let years = 1900;
    let yearsMax = 124



    for(let i = 1; i < days; i++)
    {
        dayCount.options[i] = new Option(`${i}`);
    }


    for(let i = 1; i < months; i++)
    {
        monthCount.options[i] = new Option(`${i}`);
    }
    for(let i = 1; i < yearsMax; i++)
    {
        yearCount.options[i] = new Option(`${i - 1 + years}`);
    }

    calculateBirthday()

}

function calculateBirthday()
{
    const msPerDay = 1000 * 60 * 60 * 24;
    const msPerYear = 1000 * 60 * 60 * 24 * 365.25;
    let currentDate = new Date()
    let birthDay = parseInt(dayCount.value);
    let birthMonth = parseInt(monthCount.value);
    let keepDay = parseInt(dayCount.selectedIndex)
    const normalMonths = [1,3,5,7,8,10,12]
    const weirdMonths = [4,6,9,11]
    let birthYear = parseInt(yearCount.value);
    let stop = false

    //if year is % 4 thats a gay thing i hate
    if(normalMonths.includes(birthMonth))
    {
        for(let i = 1; i < 32; i++)
        {
            dayCount.options[i] = new Option(`${i}`);
        }
        if(keepDay + 1 > dayCount.options.length)
        {
            dayCount.selectedIndex = dayCount.options.length -1
        }
        else {
            dayCount.selectedIndex = keepDay
        }
    }
    if(weirdMonths.includes(birthMonth))
    {
        for(let i = 1; i < 32; i++)
        {
            dayCount.options[i] = new Option(`${i}`);
        }
        for (let i = 32; i > 30; i--)
        {
            dayCount.options[i] = null;
        }
        if(keepDay + 1 > dayCount.options.length )
        {

            dayCount.selectedIndex = dayCount.options.length - 1
        }
        else {
            dayCount.selectedIndex = keepDay
        }
    }
    if(birthMonth == 2)
    {
        for(let i = 1; i < 32; i++)
        {
            dayCount.options[i] = new Option(`${i}`);
        }
        if (birthYear % 4)
        {
            for (let i = 31; i > 28; i--)
            {
                dayCount.options[i] = null;
            }
        }
        else
        {
            for (let i = 31; i > 29; i--)
            {
                dayCount.options[i] = null;
            }
        }
        if(dayCount.options.length < keepDay + 1)
        {

            dayCount.selectedIndex = dayCount.options.length - 1
        }
        else {
            dayCount.selectedIndex = keepDay
        }
    }


    if(dayCount.value == "" || yearCount.value == "" || monthCount.value == "" ){
        calculationString.innerText = "Please enter a birth Day, Month and Year"
        birthdayString.innerText = ""
        stop = true
    }
    const birthday = new Date(`${birthYear}-${birthMonth}-${birthDay}`)
    const nextBirthday = Date.UTC(birthday.getFullYear(), birthday.getMonth(), birthday.getDate());

    //next birthday info - currentDate
    let days = Math.floor(((currentDate - nextBirthday) / msPerDay))
    let years = Math.abs(((nextBirthday - currentDate) / msPerYear))
    years = years.toFixed(2)

    if(!stop) {
        let randomInt = Math.floor(Math.random() * 4)
        calculationString.innerText = `You are ${days} days old!
        You are ${years} years old!`
        if(currentDate.getMonth() + 1 === birthMonth && currentDate.getDate() === birthDay){
            birthdayString.innerText = `${birthdayStrings[randomInt]}`
        }
        else
        {
            birthdayString.innerText = ""
        }

    }
}


fillListStart()


