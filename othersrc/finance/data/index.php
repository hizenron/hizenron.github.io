<?php
//1.加载公共PHP
require("init.php");
//2.接收当前页的请求数据
 @$recommended=$_REQUEST["recommended"];
//3.判断是否存在，不存在自定义默认值
if($recommended==null)
$recommended=1;
//4.查询总记录数：
$sql="SELECT * FROM fm_production where recommended=$recommended AND (isdel!=1) GROUP BY pid";
$result=mysqli_query($conn,$sql);
$rowlists=mysqli_fetch_all($result,MYSQLI_ASSOC);
//5.转换成Json数据并输出
echo json_encode($rowlists);
?>