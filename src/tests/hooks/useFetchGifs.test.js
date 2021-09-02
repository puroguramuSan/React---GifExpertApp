import { render } from '@testing-library/react';
import { renderHook, awa } from '@testing-library/react-hooks';

import { useFetchGifs } from '../../hooks/useFetchGifs';

describe("Pruebas en el hook useFetchGifs", async() => {

    test("Debe de retornar su estado inicial", async () => {
        
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch Man'));

        await waitForNextUpdate();

        const { data, loading } = result.current;

        console.log(result.current);

        expect( data.length ).toEqual(16);
        expect( loading ).toBe(false);
    });

    test("Debe de retornar un arreglo de gifs y loading en false", async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs("One Punch Man") );
        
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toEqual(16);
        expect( loading ).toBe(false);
    });
});