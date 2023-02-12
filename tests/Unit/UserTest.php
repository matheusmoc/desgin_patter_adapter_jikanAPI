<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    use RefreshDatabase; //limpar banco de dados toda vez que o teste for finalizado
    /**
     * Analisará se possui colunas a menos ou a mais na tabela e deixando a estrutura fora do padrão
     *
     * @return void
     */
    public function test_check_if_my_table_user_is_correct()
    {
        $user = new User;

        $isExpected = [
            'name',
            'email',
            'passwords',
        ];

        $compare = array_diff($isExpected, $user->getFillable()); //compara retornando todos os campos preenchidos
        dd($compare);
        $this->assertEquals(0, count($compare)); //vai verificar array com diferenças
    }
}
