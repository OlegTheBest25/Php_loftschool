<?php
include "src/ServiceInterface.php";
include "src/Tariffinterface.php";
include "src/TariffAbstract.php";
include "src/TariffBasic.php";
include "src/TariffHour.php";
include "src/ServiceGPS.php";
include "src/ServiceDriver.php";

$tariff = new TariffBasic(5, 60);
$tariff->addService(new ServiceGPS(15));
$tariff->addService(new ServiceDriver(100));
echo $tariff->countPrice();
