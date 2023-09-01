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