import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  input: '../backend/openapi.json',
  output: {
    path: './src/client',
    format: 'prettier'
  },
  plugins: [
    '@hey-api/client-fetch',
    '@tanstack/react-query'
  ]
})
