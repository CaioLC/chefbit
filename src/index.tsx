import { Elysia, t } from "elysia"
import { html } from "@elysiajs/html"
import * as elements from "typed-html"
import { swagger } from '@elysiajs/swagger'

const app = new Elysia()
  .use(swagger())
  .use(html())
  .get("/", ({ html }) => html(
    <BaseHtml>
      <body>
        <HeroWelcome/>
      </body>
    </BaseHtml> 
  ))
  .listen(3000);

function BaseHtml({ children } : elements.Children) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Chefbit</title>
        <script src="https://unpkg.com/htmx.org@1.9.5" integrity="sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO" crossorigin="anonymous"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://unpkg.com/hyperscript.org@0.9.11"></script>
    </head>
    ${children}
    </html>
  `
}

function HeroWelcome() {
  return (
    <p>Chefbit</p>
  )
}
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
