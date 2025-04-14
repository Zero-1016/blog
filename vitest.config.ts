/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin'

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/setup.ts',
        '**/*.d.ts',
        '**/*.config.{js,ts}',
        '**/*.stories.{js,jsx,ts,tsx}'
      ]
    },
    workspace: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: '.storybook'
          })
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: false,
            provider: 'playwright'
          }
        }
      }
    ]
  }
})
