let a = 'oi'
let b = 'olá'

Deno.test("Teste do oi (NO API)", () => {
    if (a != "oi") {
        throw new Error(`${a} não é oi`);
    }
})

Deno.test("Não pode ser oi (NO API)", () => {
    if (b == "oi") { 
        throw new Error(`${a} é oi`);
    }
})

/*
console.log("Hello World, Deno!");
console.log("Welcome to Deno!");
console.log("Welcome to Deno!");console.log("Welcome to Deno!");console.log("Welcome to Deno!");console.log("Welcome to Deno!");
console.log("Konnichiwa warudo!");
console.log("SHE QUIEEN OF THE KINGS RUNNING SO FAST BEATING THE WIND; NMOTHING IN THIS WORLD CAN STOP THE SPREAD OF HER WINGS.;; SHE QUEEN OF THE KINGS BROKE HER CAGE TREW OUT THE KEYS SHE WILL BE THE WARRIOR OF THE NORTH AND SOUTHERN SEAS LA DIDADAAAA LAAAA IALAIA LAI LAIRIRA LAAIRALAIRA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA HER NAME OIS SHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE!");
console.log("imi danceing mAH NINKU CHA CHA CHA AINNT KAKA !");
console.log("AND WHEN THE WORLD GOT ME GOING CRAZYYYYYYYYYYYYYYYYYY I CARRY OOOOOOOOOOON AND IS SO BECAUSE OF YOUUUUUUUUUUUUUU");
console.log("Сестро красива Ой ти сильна Хоробра єдина Корона твоя Сестро красива Ой ти сильна Хоробра єдина Корона твоя");
console.log("It's gonna be phenomen-phenomen-phenomenal Phenomen-phenomenal אנ'לא כמו כולם, מול כל העולם, לא It's gonna be phenomen-phenomen-phenomenal Phenomen-phenomenal");
console.log("YOU CAN'T BREAK A OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO YOU CAN'T YOU CAN'T BREAK A BROKEN HEART OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
console.log("Soarele, Soarele, Soarele și Luna
Ne-or ține, ne-or ține, ne-or ține cununa
Soarele, Soarele, Soarele și Luna
Ne-or ține, ne-or ține, ne-or ține cununa");
*/