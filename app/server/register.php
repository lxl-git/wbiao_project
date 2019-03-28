<?php
    include("./connect_db.php");
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    $sql = "insert into `user`(`phone`, `password`) values ('$phone', '$password')";
    $db = new DB();
    $result = $db->fetch($sql);
    // var_dump($db);
    if($result) {
        echo "<script>
                alert('注册成功，正在跳转');
                location.href = '';
            </script>";
    }else{
        echo "<script>
                alert('由于网络原因，注册失败; 请重试');
                location.href = 'http://localhost:7777/register.html';
        </script>";
    }
?>

