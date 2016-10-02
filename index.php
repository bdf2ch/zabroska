<?php

    require_once $_SERVER["DOCUMENT_ROOT"].DIRECTORY_SEPARATOR."serverside".DIRECTORY_SEPARATOR."config.php";
    require_once $_SERVER["DOCUMENT_ROOT"].DIRECTORY_SEPARATOR."serverside".DIRECTORY_SEPARATOR."libs".DIRECTORY_SEPARATOR."xtemplate".DIRECTORY_SEPARATOR."xtemplate.class.php";

    $template = new XTemplate($_SERVER["DOCUMENT_ROOT"].DIRECTORY_SEPARATOR."serverside".DIRECTORY_SEPARATOR."templates".DIRECTORY_SEPARATOR."main.html");
    $template -> parse("main");
    $template -> out("main");

?>