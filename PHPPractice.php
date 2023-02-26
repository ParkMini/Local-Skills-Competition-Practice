<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo $_POST["id"];
    echo "\n";
    echo $_POST["pw"];
} else {
    echo $_SERVER["REQUEST_METHOD"];
}
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Practice</title>
</head>
<body>
    <form action method="POST">
        <input type="text" name="id" placeholder="ID">
        <input type="password" name="pw" placeholder="Password">
        <button>Submit</button>
    </form>
</body>
</html>