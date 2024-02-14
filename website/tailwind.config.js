/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {
          colors: {
              primary: "#00ad37",
              "primary-content": "#adffc7",
              "primary-dark": "#007a27",
              "primary-light": "#00e047",
  
              secondary: "#001fad",
              "secondary-content": "#adbcff",
              "secondary-dark": "#00167a",
              "secondary-light": "#0028e0",
  
              background: "#eff1ef",
              foreground: "#fbfbfb",
              border: "#dde2de",
  
              copy: "#232925",
              "copy-light": "#5e6e63",
              "copy-lighter": "#849589",
  
              success: "#00ad00",
              warning: "#adad00",
              error: "#ad0000",
  
              "success-content": "#adffad",
              "warning-content": "#000000",
              "error-content": "#ffadad"
          },
      }
  },
    plugins: []
  };