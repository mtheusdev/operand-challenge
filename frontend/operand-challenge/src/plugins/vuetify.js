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
        secondary2: colors.blue.darken1,
        accent: colors.orange.accent3,
        dark: colors.orange.darken3,
        deep: colors.deepOrange,
        error: colors.red,
        error2: colors.red.accent3,
        success: colors.lightBlue,
        warning: colors.yellow
      }
    }
  }
})
