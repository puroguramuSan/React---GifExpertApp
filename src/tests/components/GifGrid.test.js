import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe("Pruebas en el componente GifGrid.js", () => {
    
    const category = "One Punch Man";

    const gifs = [{
        id: 1,
        type: "gif",
        title: "gif",
        url: "https://url.com/gif.gif"
    }]

    beforeAll(() => {
        jest.clearAllMocks();
    });
    
    test("Probando que el componente se renderize correctamente", () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const component = render(<GifGrid category = { category }/>);

        const categoryTitle = component.container.querySelector('h3');

        expect(categoryTitle).toHaveTextContent( category );
    });

    test("Debe de mostrar items cuando se cargan imágenes usando custom hook useFetchGifs", () => {

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true
        });

        const component = render(<GifGrid category = { category }/>);
        
        const gif = component.container.querySelector('ol').querySelector('img');

        expect(gif.src).toBe(gifs[0].url);


    });

    test("Probando que no exista la etiqueta p 'Loading'", () => {
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const component = render(<GifGrid category = { category }/>);

        const loading = component.container.querySelector(".loading-label");

        expect(loading).not.toBeInTheDocument();
    });

    test("Probando que exista el número correcto de componentes GifGridItem", () => {

        const gifs = [{
            id: 1,
            type: "gif",
            title: "gif",
            url: "https://url.com/gif.gif"
        },
        
        {
            id: 2,
            type: "gif2",
            title: "gif2",
            url: "https://url.com/gif2.gif"
        }

        ];
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const component = render(<GifGrid category = { category }/>);

        const gifItems = component.container.querySelectorAll(".card");

        console.log(gifItems);

        expect(gifItems.length).toBe(2);
    });
});