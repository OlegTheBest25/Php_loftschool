<?php
abstract class TariffAbstract implements Tariffinterface
{
    protected $PricePerKilometer;
    protected $PricePerMinute;
    protected $distance;
    protected $minutes;
    protected $services = [];
    public function __construct(int $distance, int $minutes)
    {
        $this->distance = $distance;
        $this->minutes = $minutes;
    }
    public function countPrice(): int
    {
        $price = $this->distance * $this->PricePerKilometer + $this->minutes * $this->PricePerMinute;
        if ($this->services) {
            foreach ($this->services as $service) {
                $service->apply($this, $price);
            }
        }
        return $price;
    }
    public function addService(ServiceInterface $service): Tariffinterface
    {
        array_push($this->services, $service);
        return $this;
    }
    public function getMinutes(): int
    {
        return $this->minutes;
    }
    public function getDistance(): int
    {
        return $this->distance;
    }
}
