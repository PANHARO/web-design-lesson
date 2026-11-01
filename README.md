# Web Design Lessons

A collection of web-design course examples and exercises using HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS.

## Explore

| Folder | Topics |
| --- | --- |
| `html/`, `exercise_html/` | Lists, tables, forms, media, and markup exercises |
| `css/`, `css_layout/`, `exercise_css/` | Typography, box model, Flexbox, Grid, positioning, and layouts |
| `animation_css/` | CSS and AOS animation examples |
| `bootstrap/` | Grids, tables, forms, accordions, and other components |
| `tailwind_css/` | Tailwind layout and dark-mode examples |
| `javascript/`, `json_lesson/` | Language basics, JSON, and asynchronous examples |
| `git-lesson/` | Git notes and practice materials |

## Preview and edit

Run `python -m http.server 8000` from the repository root (`python3` on some systems), then open an example such as [html/form.html](http://localhost:8000/html/form.html). There is no single application entry point. Some examples use external fonts, images, or CDNs and need internet access.

For Tailwind changes, install Node.js and npm, then run:

```sh
npm ci
npm run dev
```

This watches `src/input.css` and generates `src/output.css`; it does not start a web server. Preview the changed exercise in a browser.
