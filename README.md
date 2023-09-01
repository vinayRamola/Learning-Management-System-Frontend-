# LMS frontend

### Setup instruction

1. Clone the project

```
    git clone 
```

2. Move into the directory

```
    cd lms-frontend-
```

3. install dependencies

```
    npm i
```

4. run the server

```
    npm run dev
```

### setup instruction for tailwind

[Tailwind official instruction dox] (https://tailwindcss.com/docs/installation)

1. install tailwind
```
    npm install -D tailwindcss
```

2. Create config file
```
    npx tailwindcss init
```

3. ADD file extension to tailwind config file in the contents property
```
    "./src/**/*.{html,js,jsx,ts,tsx}"
```

4. Add the tailwind directives at the top of the `index.css` file
```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

### Adding install plugins and dependecies

```
    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

### Configure auto import sort esline

1. Install simple import sore

```
    npm i -D eslint-plugin-simple-import-sort
```

2. Add rule in `.eslintrc.cjs`
```
    'simple-import-sort/imports': 'error',
```

2. Add  simple-import plugin in `eslintrc.cjs`
```
    plugins: [...,'simple-import-sort']
```

3. To Enable auto import sort in file save in vscode
    - Open  `settings.json`
    - add the following config
```
    "editor.codeActionsOnSave":{
        "source.fixAll.eslint":true"
    }
```