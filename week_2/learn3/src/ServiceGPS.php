<?php
class ServiceGPS implements ServiceInterface
{
    private $PricePerHour;
    public function __construct(int $PricePerHour)
    {
        $this->PricePerHour =
            $PricePerHour;
    }
    public function apply(Tariffinterface $tariff, &$price)
    {
        $hours = ceil($tariff->getMinutes / 60);
        $price += $this->PricePerHour * $hours;
    }
}
