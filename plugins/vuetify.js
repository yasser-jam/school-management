import { createVuetify } from "vuetify";
import { ar } from "vuetify/locale";
import * as components from "vuetify/components";
import { VDataTable, VDataTableServer } from "vuetify/labs/VDataTable";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components: {
      ...components,
      VDataTable,
      VDataTableServer,
    },
    directives,
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#2196F3",
            success: "#50cd89",
            info: "#7239ea",
            warning: "#ffc700",
            error: "#f1416c",
            dark: "#181C32",
            "surface-lighten-1": "#F5F8FA",
          },
        },
      },
    },
    defaults: {
      VTextField: {
        density: "compact",
        color: "primary",
      },
      VRow: {
        dense: true,
      },
      VCol: {
        class: "py-0",
      },
      VSelect: {
        density: "compact",
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
