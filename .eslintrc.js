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
        ]
    }
};