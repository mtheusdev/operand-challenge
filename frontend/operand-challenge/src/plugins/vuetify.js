import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import pt from 'vuetify/lib/locale/pt'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { pt },
    current: 'pt'
  },
  theme: {
    themes: {
      dark: {
        primary: colors.orange,
        secondary: colors.blue,
        accent: colors.orange.accent3,
        dark: colors.orange.darken3,
        deep: colors.deepOrange,
        error: colors.red,
        success: colors.lightBlue,
        warning: colors.yellow
      }
    }
  }
})
