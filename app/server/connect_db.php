<?php
    class DB {
        public $ip = 'localhost';
        public $root = 'root';
        public $password = 'root';
        public $dbname = 'im';
        public $port = '3306';

        public function fetch($sql, $type='bool') {
            $con = new mysqli($this->ip, $this->root, $this->password, $this->dbname, $this->port);
            $con->query("set character set 'utf8'");
            $con->query("set names 'utf8'");
            $result = $con->query($sql);
            switch($type) {
                case "bool":
                    return $result;
                case "object":
                    return $result->fetch_object();
                case "all":
                    $arr = array();
                    while($row = $result->fetch_object()) {
                        array_push($arr, $row);
                    }
                    return $arr; 
            }
        }

    }
?>