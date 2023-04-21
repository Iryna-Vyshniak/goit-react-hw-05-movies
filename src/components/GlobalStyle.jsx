import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    min-height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background: #B9E4C9;
    font-size: 12px;
    line-height: 1.5;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  main {
    flex: 1 1 auto;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
	margin: 0;
}

ul,
ol {
	margin: 0;
	padding: 0;
	list-style: none;
}

img {
	display: block;
	max-width: 100%;
	height: auto;
}

a {
text-decoration: none;
}

/* SWIPER */

.swiper-slide {
  text-align: center;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  color: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
}


`;
