import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Prueba en las funciones de heroes', () => {
    

    test('Debe retornar un heroe por el id', () => {
            
        const id = 1;
        const heroe = getHeroeById(id)

        const heroeData = heroes.find(h => h.id === id)

        expect(heroe).toEqual(heroeData)

    })

    test('Debe retornar undefined si heroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById(id)

        expect(heroe).toBe(undefined)

    })

    test('Debe retornar heroes Dc', () => {
        
        const owner = "DC";

        const heroe = getHeroesByOwner(owner)

        const heroeData = heroes.filter( h =>h.owner === owner )

        expect(heroe).toEqual(heroeData)

    })

    test('Debe retornar heroes de MArvel', () => {
        
        const owner = "Marvel";

        const heroe = getHeroesByOwner(owner)

       

        expect(heroe.length).toBe(2)

    })
    
    


})
