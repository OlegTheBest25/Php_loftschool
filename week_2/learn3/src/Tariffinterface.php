<?php
interface Tariffinterface
{
    public function countPrice(): int;
    public function addService(ServiceInterface $service): self;
    public function getMinutes(): int;
    public function getDistance(): int;
}
