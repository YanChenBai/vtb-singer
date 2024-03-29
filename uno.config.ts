// uno.config.ts
import {
  defineConfig,
  presetMini,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
    }
  },
  rules: [
    [
      'flex-full-cc',
      {
        display: 'flex',
        width: '100%',
        'justify-content': 'center',
        'align-items': 'center'
      }
    ]
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: 'flex',
        'align-items': 'center'
      }
    }),
    presetTypography(),
    presetMini(),

    presetWebFonts({
      fonts: {
        // ...
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
