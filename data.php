<?php

$date = date("Y년m월d일 h시i분s초");
echo "
        print_data = '서버시간 : $date';
        document.all.Timearea.innerHTML = print_data;
";

?>
