<?php
$pdo = new PDO('sqlite:chat.db');

$pdo->exec('CREATE TABLE messages (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(20),
  message VARCHAR(250)
)');
