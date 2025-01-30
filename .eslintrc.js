module.exports = {
    extends: ['next/core-web-vitals', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    rules: {
      // Desactivar advertencias sobre dependencias en Hooks
      'react-hooks/exhaustive-deps': 'off',
  
      // Permitir <img> en lugar de <Image /> de Next.js
      '@next/next/no-img-element': 'off',
  
      // Permitir imágenes sin atributo "alt"
      'jsx-a11y/alt-text': 'off',
  
      // Permitir variables no usadas (útil si las definirás después)
      '@typescript-eslint/no-unused-vars': 'off',
  
      // Permitir uso de `{}` vacío
      '@typescript-eslint/no-empty-object-type': 'off',
  
      // Desactivar advertencia sobre caracteres no escapados en JSX
      'react/no-unescaped-entities': 'off',
    },
  };
  