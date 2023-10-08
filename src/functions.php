<?php

/*Задание #1

Функция должна принимать массив строк и выводить каждую строку в отдельном параграфе (тег <p>)
Если в функцию передан второй параметр true, то возвращать (через return) результат в виде одной объединенной строки. */

function task1( array $strings, $return = true){
$result = implode('/n', array_map(function(string $str){
 return "<p>$str</p>"
}, $strings));
 if ($return){
     return $result;
 }
 echo $result;
}

/* Задание #2

Функция должна принимать переменное число аргументов.
Первым аргументом обязательно должна быть строка, обозначающая арифметическое действие, которое необходимо выполнить со всеми передаваемыми аргументами.
Остальные аргументы это целые и/или вещественные числа.
Пример вызова: calcEverything(‘+’, 1, 2, 3, 5.2);
Результат: 1 + 2 + 3 + 5.2 = 11.2 */

function task2(string $action, ...$args){

    

    switch($action){
        case '+': 
            return array_sum($args);
        case '-':
            return array_shift($args) - array_sum($args);
        case '/':
            $result = array_shift($args);
            foreach ($args as $arg){
                if ($arg == 0) {
                    trigger_error('zero');
                    return 'Error';
                }
                $result = $result/ $arg;
            }
            return $result;
        case '*':
            $result = 1;
            foreach ($args as $arg){
                $result *= $arg;
            }
            return $result;
            default:
            return "ERROR";
    }

}

/* Задание #3 (Использование рекурсии не обязательно)

Функция должна принимать два параметра – целые числа.
Если в функцию передали 2 целых числа, то функция должна отобразить таблицу умножения размером со значения параметров, переданных в функцию. (Например если передано 8 и 8, то нарисовать от 1х1 до 8х8). Таблица должна быть выполнена с использованием тега <table>
В остальных случаях выдавать корректную ошибку. */

function task3( $a,  $b){
    if (!is_int($a)){
        trigger_error('no integer');   
        return false;
    }
    if (!is_int($b)){
        trigger_error('no integer');   
        return false;
    }
    if ($a<0 || $b<0){
        trigger_error('Arguments to be positive');   
        return false;
    }

$result = '<table>';
for ($i=0; $i < $a; $i++) { 
    $result.= '<tr>';
    for ($j=0; $j < $b; $j++) { 
        $result .= '<td>';
        $result .= $i*$j;
        $result .= '</td>';
    }
    $result.= '</tr>';
}
$result .= '</table>';
echo $result;
}

/*Задание #4 (выполняется после просмотра модуля “ВСТРОЕННЫЕ ВОЗМОЖНОСТИ ЯЗЫКА”) 

Выведите информацию о текущей дате в формате 31.12.2016 23:59
Выведите unixtime время соответствующее 24.02.2016 00:00:00. */

function task4(){
    date_default_timezone_set('Europe/Moscow');
echo date('d.m.y H:i');
echo '<br>'
echo strtotime('24.02.2016 00:00:00');
}

/*Задание #5 (выполняется после просмотра модуля “ВСТРОЕННЫЕ ВОЗМОЖНОСТИ ЯЗЫКА”)

Дана строка: “Карл у Клары украл Кораллы”. Удалить из этой строки все заглавные буквы “К”.
Дана строка: “Две бутылки лимонада”. Заменить “Две”, на “Три”. */

function task5(){
    $string = 'Карл у Клары украл Кораллы';
    $string2 = 'Две бутылки лимонада'; 
    echo str_replace('К', '', $string);
    echo str_replace('Две', 'Три', $string2);

}

/* Задание #6 (выполняется после просмотра модуля “ВСТРОЕННЫЕ ВОЗМОЖНОСТИ ЯЗЫКА”)

Создайте файл test.txt средствами PHP. Поместите в него текст - “Hello again!”
Напишите функцию, которая будет принимать имя файла, открывать файл и выводить содержимое на экран. */

function task6(){
file_put_contents('test.txt', "Hello again");
}

function task7(){
echo file_get_contents($filename);
}




