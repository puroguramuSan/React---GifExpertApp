import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/user-event';

import AddCategory from '../../components/AddCategory';

describe("Pruebas para el componente AddCategory.js", () => {

    const setCategories = () => {

    }

    beforeAll(() => {
        jest.clearAllMocks();
    });

    test("Probando que el componente se renderize correctamente", () => {
        const component = render( <AddCategory setCategories = { setCategories }/> );

        const input = component.container.querySelector('input');

        expect(input).toBeInTheDocument;
    });

    test("Probando el evento change del input", () => {
        const component = render( <AddCategory setCategories = { setCategories }/> );

        const input = component.container.querySelector('input');

        fireEvent.change(input, {target: { value: "test"}});

        expect(input.value).toBe("test");
    });

    test("Probando el evento submit", () => {

        const setCategories = jest.fn();

        const component = render( <AddCategory setCategories = { setCategories } onSubmit = { setCategories }/>);

        const form = component.container.querySelector('form');
        const input = component.container.querySelector('input');
        
        fireEvent.change(input, { target: {value: "One Punch Man"}});
        fireEvent.submit(form);

        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(input.value.length).toBe(0);
    });
});