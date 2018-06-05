module.exports = {
    'extends': 'airbnb',
    'rules': {
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
                packageDir: [
                    './',
                ]
            }
        ],
        'no-unused-expressions': [
            'error',
            {
                allowTaggedTemplates: true,
            }
        ],
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
    },
    'settings': {
        'import/resolver': 'webpack'
    }
};