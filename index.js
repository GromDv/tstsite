get();

setInterval(get, 2000);

function send() {
    //прочитать сообщение из id=message
    mess = document.getElementById('newMess').value;
    //выведите в консоль сообщение
    console.log(mess);
    //очистить поле ввода
    document.getElementById('newMess').value = "";
}

function get() {

    (async () => {
            var response = await fetch('https://gromdv.github.io/tstsite/chat.txt');
            var answer = await response.text();
            document.getElementById('chat').innerText = answer;
        }
    )();


}