<?php

namespace App\Http\Controllers;

//controllador do adaptador

use App\Adapters\RestApiAnimesAdapter; // ao invés de importar o adaptador, importamos o service
use App\Contracts\AnimesService;

class AnimeController extends Controller
{
    private $restApiAnimesAdapter;

    public function __construct(AnimesService $animeService)
    {
        $this->restApiAnimesAdapter = $animeService;
    }
    public function getAnimes(){
        return $this->restApiAnimesAdapter->getAnimes();

    }

    public function getAnimeById(){
        $anime = request()->get('id');

        return $this->restApiAnimesAdapter->getAnimeById($anime);
    }

    public function getAnimeByCharacter(){

        $character = request()->get('character');
        return $this->restApiAnimesAdapter->getAnimeByCharacter($character);

    }
}
