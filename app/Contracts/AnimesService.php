<?php
//adaptar funcionalidades utiliuzando serviços que não está adaptado no laravel

//toda interface são contratos que devem ser cumpridos por x classes

namespace App\Contracts;


interface AnimesService{
    public function getAnimes();
    public function getAnimeById(int $id);
    public function getAnimeByCharacter(string $character);
}
