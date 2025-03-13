// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  antfu(
    {
      vue: true,
      jsonc: true,
      typescript: { tsconfigPath: './tsconfig.json' },
    },
    {
      rules: {
        'unused-imports/no-unused-vars': 'warn',
        'no-console': 'warn',
      },
    },
  ),
)
