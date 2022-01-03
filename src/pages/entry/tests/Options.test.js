import { render, screen } from "@testing-library/react";
import Options from "../Options";

describe('Options component', () => {
    test('display image for each scoop option from server', async () => {
        render(<Options optionType='scoops' />);

        // find image
        const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
        expect(scoopImages).toHaveLength(2);

        // confirm alt text of image
        const altText = scoopImages.map((element) => element.alt);
        expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
    });

    test('display image for each toppings options from the server', async () => {
        render(<Options optionType='toppings' />);

        const toppingImage = await screen.findAllByRole('img', { name: /topping$/i });
        expect(toppingImage).toHaveLength(3);

        const altText = toppingImage.map((element) => element.alt);
        expect(altText).toEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping']);
    });
});