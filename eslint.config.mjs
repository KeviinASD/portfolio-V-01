import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { rule } from "postcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react-hooks/exhaustive-deps": "off", // Desactiva advertencia en useEffect y useCallback
      "@typescript-eslint/no-unused-vars": "off", // No marca variables sin usar
      "@typescript-eslint/no-empty-object-type": "off", // No marca {} vacío como error
      "react/no-unescaped-entities": "off", // Permite caracteres como ' sin escapar
    }
  }
];

export default eslintConfig;
