import React from 'react';
import { render, screen } from '@testing-library/react';
import GifExpertApp from '../../GifExpertApp';
import { GifGridItem } from '../components/GifGridItem.test';
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

beforeAll(() => {
    jest.clearAllMocks();
});

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

describe("Pruebas para el componente <GifExpertApp />", () => {

    test("Probando que el componente se renderize correctamente", () => {

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const defaultCategories = ["One Punch Man"];

        const component = render(<GifExpertApp defaultCategories = { defaultCategories } />);
        
        const title = screen.getByTestId("category-title");
        
        expect(title.innerHTML).toBe(defaultCategories[0]);
    });

    test("Prueba de integración con GifGridItem", () =>{
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const defaultCategories = ["One Punch Man"];

        const component = render(<GifExpertApp defaultCategories = { defaultCategories } />);

        const gridItems = screen.getAllByTestId("grid-item");

        expect(gridItems.length).toBe(2);
    });
});