<?php
$action = $_POST['action'];

require_once 'function.php';

switch ($action) {
    case 'init':
        init();
        break;
    case "selectOnespoon":
        selectOnespoon();
        break;
    case 'updatespoon':
        updatespoon();
        break;
    case 'newspoon':
        newspoon();
        break;
    case 'delspoon':
        delspoon();
        break;
    case 'init_feedback':
        init_feedback();
        break;
    case 'updatefeed':
        updatefeed();
        break;
    case 'loadspoon':
        loadspoon();
        break;
    case 'spoonSingleTem':
        spoonSingleTem();
        break;
    case 'feedsingle':
        feedsingle();
        break;
    case 'initUserMess':
        initUserMess();
        break;
    case 'selectOneUserMess':
        selectOneUserMess();
        break;
    case 'delUserMess':
        delUserMess();
        break;

}
?>
