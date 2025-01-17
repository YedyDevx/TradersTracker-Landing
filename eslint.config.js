// Importaciones de dependencias
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

// Configuración de ESLint
export default {
  // Ignorar la carpeta 'dist'
  ignores: ['dist'],
  
  // Extensiones de configuraciones recomendadas
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  
  // Especificación de archivos a incluir
  files: ['**/*.{js,jsx}'],
  
  // Opciones de lenguaje
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    globals: {
      ...globals.browser,
      ...globals.es2020,
      React: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  
  // Plugins a utilizar
  plugins: {
    react,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  
  // Reglas personalizadas
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
  
  // Configuración específica de React
  settings: {
    react: {
      version: 'detect',
    },
  },
};
