<?php
interface ServiceInterface
{
    public function apply(Tariffinterface $tariff, &$price);
}
