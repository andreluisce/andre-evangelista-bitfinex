module.exports = {
    env: {
        browser: true,
        node: true,
        'jest/globals': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended',
        'plugin:react/jsx-runtime',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            impliedStrict: true,
            legacyDecorators: true,
            classes: true,
        },
    },
    plugins: ['@typescript-eslint', 'jest', 'sort-imports-es6-autofix', 'prettier', 'jsx-a11y'],
    rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        "react/no-unknown-property": "warn",
        'jsx-a11y/label-has-for': ['error', { required: { every: ['id'] } }],
        'jsx-a11y/no-onchange': 'off',
        'node/no-unsupported-features/es-syntax': 'off',
        'prefer-const': 'error',
        'no-duplicate-imports': 2,
        'no-multiple-empty-lines': 'error',
        'no-unused-vars': 'warn',
        'import/no-unresolved': 'warn',
        'prettier/prettier': [
            'error',
            {
                printWidth: 100,
                singleQuote: true,
                trailingComma: 'all',
                tabWidth: 4,
            },
            { usePrettierrc: false },
        ],
        'sort-imports-es6-autofix/sort-imports-es6': [
            2,
            {
                ignoreCase: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            },
        ],
    },
    settings: {
        react: { version: 'detect' },
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.d.ts', '.d', '.tsx'],
            },
        },
    },
};
