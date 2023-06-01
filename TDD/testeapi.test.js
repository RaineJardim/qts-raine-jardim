import{
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts";

let aluno = 'Cróvis José'
let professores = ['João', 'Lais', 'Davi', 'Bruno Aparecido Cano']

Deno.test("Teste de assertivos (API)", () => {
    assertEquals(aluno, "Cróvis José");
    assertStringIncludes(aluno, "José");  // Se a String possui algo parecido (Cróvis José tem José)
})

Deno.test("Testando array do professor (API)", () => {
    assertArrayIncludes([])
})