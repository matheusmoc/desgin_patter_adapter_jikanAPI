<?php

namespace Tests\Feature;

use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class AdapterTest extends TestCase
{
    public function test_if_api_adapter_is_working()
    {
        $response = $this->getJson('api/animes');
        $response->assertStatus(200); //o que é esperado

    }
}
