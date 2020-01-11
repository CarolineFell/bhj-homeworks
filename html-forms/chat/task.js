'use strict';

const chatBotMessages = [
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет.',
    'Какой Вы, однако, наглый. Пишите да пишите. В пустоту.',
    'Ничего себе чего. Вот тебе здравствуйте, называется.',
    '...',
    'Чё нада?',
    'Хватит сюда писать. Нет никого.',
    'Оставлю без комментариев.',
    'Вот те на! Нарисовался же на мою голову!',
    'Ну что ещё-то? Идите, идите уже, уважаемый.'
]

const chatBotMessagesWaitingAReply = [
    'Аллё, есть там кто-нибудь?',
    'Уважаемый?',
    'Ку-ку? Там кто-нибудь есть?',
    'Тук-тук? Меня слышно?',
    'Чего молчишь-то?'
]

const chatWidget = document.querySelector('.chat-widget');
const chatWidgetSide = document.querySelector('.chat-widget__side');
const messageClient = document.querySelector('.chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

const messageTime = document.querySelectorAll('message__time');
const chatWidgetMessagesContainer = document.querySelector('.chat-widget__messages-container');  

let dateHHMM = null;

function clickChat() {
    chatWidget.classList.toggle('chat-widget_active');
}

chatWidgetSide.addEventListener('click', clickChat);

function getRealDate() {
    const date = new Date();

    let dateHH = date.getHours();
    if (dateHH < 10) {
        dateHH = `0${dateHH}`;
    }

    let dateMM = date.getMinutes();
    if (dateMM < 10) {
        dateMM = `0${dateMM}`;
    }

    dateHHMM = `${dateHH}:${dateMM}`;

    for (let i=0; i < messageTime.length; i++) {
        messageTime[i].innerHTML = dateHHMM;
    }
}

messageClient.addEventListener('keydown', e => {
    if (messageClient.value) {
        if (e.keyCode === 13) {
            getRealDate();

            messages.innerHTML += `
                <div class="message message_client">
                    <div class="message__time">${dateHHMM}</div>
                    <div class="message__text">${messageClient.value}</div>
                </div>
            `;
            messageClient.value = '';
            
            chatWidgetMessagesContainer.scrollTop = chatWidgetMessagesContainer.scrollHeight;

            setTimeout(function replyMessage() {
                getRealDate();

                messages.innerHTML += `
                    <div class="message">
                        <div class="message__time">${dateHHMM}</div>
                        <div class="message__text">${chatBotMessages[Math.floor(Math.random() * chatBotMessages.length)]}</div>
                    </div>
                `;

                chatWidgetMessagesContainer.scrollTop = chatWidgetMessagesContainer.scrollHeight;
            }, 500)
        }
    }
})

let timer = 0;

function setTimer() {
    if (timer) {
        clearInterval(timer);
    } 

    timer = setInterval(function() {
        getRealDate();

        messages.innerHTML += `
        <div class="message">
            <div class="message__time">${dateHHMM}</div>
            <div class="message__text">${chatBotMessagesWaitingAReply[Math.floor(Math.random() * chatBotMessagesWaitingAReply.length)]}</div>
        </div>
        `;

        chatWidgetMessagesContainer.scrollTop = chatWidgetMessagesContainer.scrollHeight;
    }, 5000);
}

window.addEventListener('click', setTimer);
window.addEventListener('keypress', setTimer);	