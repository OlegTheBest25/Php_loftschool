<?php
function randomName()
{
    $randomNameNumber = rand(1, 5);

    switch ($randomNameNumber) {
        case 1:
            return "Messi";
            break;
        case 2:
            return "Ronaldo";
            break;
        case 3:
            return "Pele";
            break;
        case 4:
            return "Arshavin";
            break;
        case 5:
            return "Zidane";
            break;
    }
}
