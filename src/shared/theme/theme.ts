/* eslint-disable @typescript-eslint/no-explicit-any */
import * as CSS from 'csstype';
import { Scale } from '@theme-ui/css';
import { makeTheme } from '@theme-ui/css/utils';
import rootTheme from '@theme-ui/preset-base';

type Modify<T, R> = Omit<T, keyof R> & R;

type CustomThemeType = Modify<
    ReturnType<typeof makeTheme>,
    { components: any; fontSizes?: Scale<CSS.Property.FontSize<string>> }
>;

const convertToRem = (list: number[]) =>
    (list as unknown as any[]).map<string>((f) => `${f / 10}rem`);

const fontSizes = convertToRem(rootTheme.fontSizes);
const space = convertToRem(rootTheme.space);

export const base: CustomThemeType = {
    ...rootTheme,
    breakpoints: ['360px', '576px', '970px'],
    colors: {
        textPrimary: '#fff',
        textSecondary: '#484949',
        lightText: '#cdcdcf',
        background: '#fff',
        lightBackground: '#e3e3e3',
        darkBackground: '#172d3e',
        primary: '#ed34df',
        secondary: '#9c27b0',
        success: '#30caa6',
        danger: '#f3667e',
        warning: '#ffb51b',
        info: '#0b96d2',
        lightSuccess: '#e5f9f4',
        lightInfo: '#e5f4fb',
        lightDanger: '#fdedf0',
        lightWarning: '#fff7e8',
    },
    space,
    fontSizes,
    fonts: {
        body: 'Montserrat, sans-serif',
        heading: 'Bebas Neue, sans-serif',
        monospace: 'monospace',
    },
    fontWeights: {
        light: 100,
        body: 300,
        heading: 600,
        bold: 600,
    },
    components: {
        containers: {
            page: {
                backgroundColor: 'lightBackground',
                width: '100vw',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
            },
        },
    },
    sizes: space,

    styles: {
        ...rootTheme.styles,
        root: {
            ...rootTheme.styles.root,
            fontSize: '62.5%',
        },
        body: {
            fontSize: 2,
        },
    },
};

export default base;
