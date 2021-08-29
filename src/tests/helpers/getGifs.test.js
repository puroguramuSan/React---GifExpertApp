import { getGifs } from "../../helpers/getGifs";

describe('Pruebas para el helper getGifs.js', () => {
    
    test('getGifs debe regresar un arreglo de 16 valores', async () => {

        const category = "One Puch Man";

        return getGifs(category).then( res => {
            expect(res.length).toBe(16);
        });

    });

    test('getGifs debe retornar un arreglo vacio si se le da un string vacio como argumento', () => {

        const category = "";

        return getGifs(category).then( res => {
            
            expect(res.length).toBe(0);
        });
    });
});