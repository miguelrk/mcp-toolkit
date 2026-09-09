import type { UserConfig } from 'vite'

export interface McpAppsOptions {
  /**
   * Customize the isolated Vite build used for MCP Apps.
   * The returned config is merged with the toolkit's Vue and single-file plugins.
   */
  vite?: (config: UserConfig) => UserConfig | Promise<UserConfig>
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
