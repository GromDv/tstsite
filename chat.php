<?php
$pdo = new PDO('sqlite:chat.db');

if (isset($_POST['message']) && !empty($_POST['message']) && isset($_POST['name']) && !empty($_POST['name'])) {

    $message = strip_tags($_POST['message']);
    $name = strip_tags($_POST['name']);
    $data = ['name' => $name, 'message' => $message];

    $statement = $pdo->prepare(
        'INSERT INTO messages (name, message) VALUES (:name, :message)'
    );
    $statement->execute($data);

    $result = [
        'status' => 'ok'
    ];
    echo json_encode($result, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

    die();

}

$statement = $pdo->prepare(
    'SELECT * FROM messages ORDER BY id desc LIMIT 10;'
);

$statement->execute();

$messages = $statement->fetchAll(PDO::FETCH_ASSOC);

$result = [
    'status' => 'ok',
    'messages' => $messages
];

echo json_encode($result, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);




