<?php
    include("./connect_db.php");
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    echo $phone;
    echo $password; 
    $sql = "select phone, password from user where phone = '$phone' and password = '$password'";
    $db = new DB();
    $result = $db->fetch($sql, 'object');
    // var_dump($sql);
    if($result) {
        echo "<script>
                alert('登录成功，正在跳转');
                location.href = 'http://localhost:7777/index.html';
            </script>";
    }else{
        echo "<script>
                alert('登录失败; 用户名或密码不正确, 请重试');
                location.href = 'http://localhost:7777/login.html';
        </script>";
    }
?>