import React from 'react';
import { render } from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom';
import { GifGridItem } from '../../components/GifGridItem';
import { getGifs } from '../../helpers/getGifs';
import { GifGrid } from '../../components/GifGrid';

describe('Pruebas en <GifGridItem />', () => {

    test('Se debe mostrar el componente correctamente', () => {

        return getGifs('One Punch Man').then( res => {

            const gif = res[0];

            const gifComponent = render(<GifGridItem { ...gif }/>);

            gifComponent.getByText(gif.title);
        });
    });

    test('Debe de mostrar una imagen con el src dado en el argumento', () => {
        
        return getGifs('One Punch Man').then( res => {

            const gif = res[0];

            const gifComponent = render(<GifGridItem { ...gif }/>);

            const img = gifComponent.container.querySelector('img');

            gifComponent.getByText(gif.title);
            
            expect(img.src).toBe(gif.url);
        });
    });
});

/* https://media4.giphy.com/media/DuVRadBbaX6A8/giphy.gif?cid=b535ef764u9m2trc1s7v2n6v03n8soqsuph5fh9ypu8ok39u&rid=giphy.gif&ct=g */