import { render, screen, waitFor } from '@testing-library/react';

import App from '../App';

describe('Render complete app', () => {
    it('should successfully render the requested response"', async () => {
        const { container } = render(<App />);

        expect(container).toMatchSnapshot();
    });
});
