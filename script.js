document.querySelector('h1').innerHTML = "Fortune Teller"
document.querySelector('h2').innerHTML = "This will tell your fortune everytime"
document.querySelector('main > h2').innerHTML = "Welcome to your personal Fortune Teller"
document.querySelector('main > h3').innerHTML = "Your fortune is below"


function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //the maxium is inclusive and the mininum is inclusive
}

console.log(getRandom(1, 12))

let day = getRandom(1, 30)

function getMonthName(day) {
    let name 
        switch (day) {
            case 1:
                name = "January"
                break;
            case 2:
                name = "February"
                break
            case 3:
                name = 'March'
                    break
            case 4:
                name = "April"
                    break
            case 5:
                name = "May"
                    break
            case 6: 
                name = "June"
                    break
            case 7:
                name = "July"
                    break
            case 8:
                name = "August"
                    break
            case 9:
                name = "September"
                    break
            case 10:
                name = "November"
                    break 
            case 11:
                name = "December"
                    break
            default:
                name = "Not a month, please try again"
                break;
        }
        return name
}

let fate = getRandom(1, 12)

function getFortune(fate) {
    let message
    switch (fate) {
        case 1:
            message = "be featured as the strongest avanger in the Marvel movies"
                break;
        case 2:
            message = "you will have a great day"
                break
        case 3:
            message = "you will get the thing you most wanted"
                break
        case 4:
            message = "you will have amazing luck"
                break
        case 5:
            message = "an unexpected trail is on its way"
                break
        case 6: 
            message = "an unexpected surpise is close by you"
                break
        case 7:
            message = "an adventure is underway"
                break
        case 8:
            message = "beware of unfriendly people"
                break
        case 9:
            message = "family will play a big role in ones life"
                break
        case 10:
            message = "push through hard things, life will get better"
                break
        case 11:
            message = "take time to refelct on life"
                break
        case 12:
            message = "life is short, enjoy what you do if not get to where you will enjoy it"
                break
        default:
            message = "a number was not selected"
            break;
    }
    return message
}

// let day = getRandomDay(1, 30)


const monthName = getMonthName(day)

const fortuneTeller = getFortune(fate)

const fateMessage = `On the ${day}th of ${monthName} you will ${fortuneTeller}`

document.querySelector('#fortune').innerText = fateMessage

