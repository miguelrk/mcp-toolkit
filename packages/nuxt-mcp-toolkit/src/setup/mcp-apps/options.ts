import type { PluginOption } from 'vite'

export interface McpAppsOptions {
  /**
   * Additional plugins for the isolated Vite build used for MCP Apps.
   * The toolkit's Vue and single-file plugins are always retained.
   */
  plugins?: PluginOption[]
  /**
   * Stylesheets to import into every app bundle.
   * `~` and `@` resolve from the Nuxt source directory.
   */
  css?: string[]
  /**
   * Replace the default Vue mount entry. Stylesheets are still imported first.
   */
  entry?: string
}
