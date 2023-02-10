<?php
namespace App\Adapters;

use App\Contracts\AnimesInterface;
use App\Contracts\AnimesService;
use Illuminate\Support\Facades\Http; //http request para ser usado nos métodos


//implementação de metódos
class RestApiAnimesAdapter implements AnimesService
{
    private $api;

    public function __construct()
    {
        $this->api = config('services.restanimes.api'); //mantém a organização
        // $this->api = 'https://api.jikan.moe/v4/anime';
    }
    public function getAnimes(){
       $response = Http::get("{$this->api}");
       return $response->json();

    }

    public function getAnimeById(string $id){
        $response = Http::get("{$this->api}/$id/full");
        return $response->json();
    }

    public function getAnimeByCharacter(string $character){

        $response = Http::get("{$this->api}/$character/characters");
        return $response->json();

    }
}
