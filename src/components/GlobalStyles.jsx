import { Global, css } from '@emotion/react';

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`

        :root {
            --primary-text-color: rgba(18, 20, 23, 0.50);
            --secondary-text-color: rgba(18, 20, 23, 1);
            --accent-text-color: rgba(52, 112, 255, 1);
            --btn-text-color: rgba(255, 255, 255, 1);
            --btn-bg-color: rgba(52, 112, 255, 1);
            --btn-hover-bg-color: rgba(11, 68, 205, 1);
            --input-bg-color: rgba(247, 247, 251, 1);
            --heart-color: rgba(255, 255, 255, 0.8);
            --selectCarlist-bg-color: #ffffff;
            --selectCarlist-border-color: rgba(18, 20, 23, 0.05);
            --selectCarBtn-text-color: rgba(18, 20, 23, 0.20);
            --border-right-color-input-selectPrice: rgba(138, 138, 137, 0.20);
            --scrollbar-thumb-bg-color: rgba(18, 20, 23, 0.05);
            --scrollbar-track-bg-color: transparent;
            --rental-conditions-color: rgba(54, 53, 53, 1);
            --rental-conditions-bg-color: rgba(249, 249, 249, 1);
        }

        body {
            margin: 0;
            font-family: 'Manrope', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-size: 12px;
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
            list-style: none;
            padding: 0;
            margin: 0;
            padding: 0;
          }

          img {
            display: block;
            max-width: 100%;
            height: auto;
          }
      `}
    />
  );
};
