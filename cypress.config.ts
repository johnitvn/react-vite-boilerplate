import { defineConfig } from 'cypress'
import cucumberPreprocessor from '@badeball/cypress-cucumber-preprocessor'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild'
import reporter from 'cypress-mochawesome-reporter/plugin'

export default defineConfig({
  watchForFileChanges: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  video: true,
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: ['cypress/**/*.feature', 'cypress/**/*.spec.ts'],
    baseUrl: 'http://localhost:6789',
    async setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await cucumberPreprocessor.addCucumberPreprocessorPlugin(on, config)
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      )

      reporter(on)

      // Make sure to return the config object as it might have been modified by the plugin.
      return config
    },
  },
})
