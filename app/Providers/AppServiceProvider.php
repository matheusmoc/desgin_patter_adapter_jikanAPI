<?php

namespace App\Providers;

use App\Adapters\RestApiAnimesAdapter;
use App\Contracts\AnimesService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public $bindings = [
        AnimesService::class => RestApiAnimesAdapter::class //adaptador de animes especificado
    ];
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
