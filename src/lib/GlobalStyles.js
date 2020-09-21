import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	:root {
		--color-white: #ffffff;
		--color-grey: #e5e5e5;
	}

	*{
		padding: 0;
    margin: 0;
    box-sizing: border-box;
    line-height: 1.3em;
    transition: background 0.5s cubic-bezier(0.23, 1, 0.32, 1);
	}


	html, body {
		scroll-behavior: smooth;
		background-color: var(--color-grey);
		font-size: 65%;
		font-family: Raleway, 'Sans-serif';
	}

	a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyles;
