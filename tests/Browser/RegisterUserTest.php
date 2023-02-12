<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use App\Models\User;

use function PHPSTORM_META\type;

class RegisterUserTest extends DuskTestCase
{
    /**
     * @test
     */
    public function test_if_route_is_correct(): void
    {
        $this->browse(function (Browser $browser) { //navga fisicamente pelo browser
            $browser->visit('/')
                    ->assertSee('Laravel');
        });
    }

    // public function test_login_working()
    // {
    //     $this->browse(function (Browser $browser) {
    //         $browser->visit('api/login')   //veri
    //             ->type('email', 'teste@gmail.com')
    //             ->type('password', 'teste@123')
    //             ->press('Login')
    //             ->assertPathIs('/home');
    //     });
    // }
}
