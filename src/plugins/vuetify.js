// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

//Colors
import colors from 'vuetify/lib/util/colors'

export default createVuetify({
	theme: {
		themes: {
			light: {
				primary: colors.grey.darken3,
				secondary: colors.grey.lighten1
			}
		}
	}
})
