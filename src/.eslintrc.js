module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'array-element-newline': ['error', 'consistent'],
        'indent': ['error', 4, { 'MemberExpression': 1, 'SwitchCase': 0 }],
        'quotes': ['error', 'single'],
        'comma-dangle': ['error', 'never'],
        'semi': ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
        'max-len': ['error', 500],
        'no-new': 'off',
        'linebreak-style': 'off',
        'import/extensions': 'off',
        'eol-last': 'off',
        'no-shadow': 'off',
        'no-unused-vars': 'warn',
        'import/no-cycle': 'off',
        'arrow-parens': 'off',
        'eqeqeq': 'off',
        'no-param-reassign': 'off',
        'import/prefer-default-export': 'off',
        'no-use-before-define': 'off',
        'no-continue': 'off',
        'prefer-destructuring': 'off',
        'no-plusplus': 'off',
        'prefer-const': 'off',
        'global-require': 'off',
        'no-prototype-builtins': 'off',
        'consistent-return': 'off',
        'vue/require-component-is': 'off',
        'prefer-template': 'off',
        'one-var-declaration-per-line': 'off',
        'one-var': 'off',
        'import/named': 'off',
        'object-curly-newline': 'off',
        'default-case': 'off',
        'import/no-dynamic-require': 'off',
        'vue/no-parsing-error': [2, { "x-invalid-end-tag": false }]
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
    ],
}