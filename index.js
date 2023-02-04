get();

setInterval(get, 2000);

function send() {

    let mess = document.getElementById('newMess').value;
    let name = document.getElementById('name').value;

    (async () => {
        var response = await fetch('chat.php',
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `name=${name}&message=${mess}`
            }
        );
        var answer = await response.json();
        if (answer.status === "ok") document.getElementById('newMess').value = "";
        if (answer.status === "error") document.getElementById('newMess').value = answer.error;
    }
)();
}

function get() {

    (async () => {
            var response = await fetch('chat.php');
            var answer = await response.json();
            let str = '';
            for(i in answer.messages) {
                str += `<div class='msg'>${answer.messages[i].name}: ${answer.messages[i].message}</div>`;
            }
            document.getElementById('chat').innerHTML = str;
        }
    )();
}

