module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended'
    ],
    // dist 디렉토리와 .eslintrc.cjs 파일을 ESLint 검사에서 제외
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh', 'react', 'prettier'],
    rules: {
        // React 컴포넌트만 export하도록 경고
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        // prettier의 포맷팅 에러를 lint 에러 리포팅으로 볼 수 있도록 하는 규칙
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                singleQuote: true,
                semi: false,
                printWidth: 120,
                useTabs: false,
                singleAttributePerLine: false,
                endOfLine: 'auto',
                trailingComma: 'none'
            }
        ],
        // 'semi': ['error', 'never'], 이렇게 규칙을 정할 수 있다.
        'comma-dangle': ['error', 'never']
    }
}
