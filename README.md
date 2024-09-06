# React + Vite

npx cap run android -l --external --public-host=192.168.31.219 --ssl --port 3000
npx cap run ios -l --external --public-host=192.168.31.219 --ssl --port 3000

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


### TO RUN ANDROID EMULATOR 

1) Run android studio and select emulator

2) Run "npm run dev"

3) Run "npm run:android" but don't forgot to change id address with your local machine address ( in package.json and in capacitor.config.json )
   "npx cap run android -l --external --public-host=[ip_address] --ssl --port 3000"
