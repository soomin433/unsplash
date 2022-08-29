module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'react/jsx-filename-extension' : [1, { extenstions: ['.js', '.jsx'] }],
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars':'off',
        'react/prop-types':'off'
    }
}
