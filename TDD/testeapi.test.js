import{
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
    assertExists 
} from "http://deno.land/std/testing/asserts.ts";  // Importação de itens do deno necessários para rodar o teste

let aluno = 'Cróvis José'
let professores = ['João', 'Lais', 'Davi', 'Bruno Aparecido Cano']
let numeros = [2, 6]

Deno.test("Teste de assertivos (API)", () => {
    assertExists(aluno);
    assertEquals(aluno, "Cróvis José");
    assertStringIncludes(aluno, "José");  // Se a String possui algo parecido (Cróvis José tem José)
})

Deno.test("Testando números", () => {
    assertArrayIncludes(numeros, [2, 33]);
})

Deno.test("Testando array do professor (API)", () => {
    assertArrayIncludes(professores, 
        ["Davi", "Lais", "Alan"],
        "Opa!!! Algo deu errado!!!!!!!????");
})
