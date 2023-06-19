// FEITO POR: JULIANA MURAKAMI OSHIKAWA & RAÍNE NERES TEIXEIRA JARDIM 

import{
    assertNotEquals,
    assertStrictEquals,
    assertAlmostEquals,
    assertMatch 
} from "http://deno.land/std/testing/asserts.ts"; 


// 1º ASSERT: NOT EQUALS (OS NOMES NÃO SÃO IGUAIS - DEU CERTO)
let professor = 'João Siles'
let personagem = 'Satoru Gojo'

Deno.test("Testando nomes NÃO iguais", () => {
    assertNotEquals(professor, personagem);
})

// 2º ASSERT: STRICT EQUALS (OS NOMES NÃO SÃO EXATAMENTE IGUAIS - DEU ERRO)
let A = 'Zelda'
let a = 'zelda'

Deno.test("Testando se as variáveis são EXATAMENTE iguais", () => {
    assertStrictEquals(A,a);
})

// 3º ASSERT: ALMOST EQUALS (OS NÚMEROS SÃO QUASE IGUAIS - DEU CERTO)
let b = 1.2333425324325
let d = 1.2333425324324

Deno.test("Testando se as variáveis são QUASE iguais", () => {
    assertAlmostEquals(b,d);

})

// 4º ASSERT: MATCH (ENCONTRAR ALGO NA VARIÁVEL (AKA: CTRL + F) - DEU CERTO)
let texto = "Hum mas... Eu serei aquele que irá achar o One Piece, Hihihihi."
let eu = "Vou passar no teste"

Deno.test("Testando se há algo específico na variável 1", () => {
    assertMatch(texto, new RegExp("One Piece"));
 });

// 4.1º ASSERT: MATCH (ENCONTRAR ALGO NA VARIÁVEL (AKA: CTRL + F) - DEU ERRADO)
Deno.test("Testando se há algo específico na variável 2", () => {
    assertMatch(eu, new RegExp("não vai"));
 });
  