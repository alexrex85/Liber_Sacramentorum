# Liber Sacramentorum {#LiberSacramentorum}

This is the full digital version of:  
Alfredo Ildefonso Schuster, *Liber Sacramentorum. Note storiche e liturgiche sul Messale Romano*, voll. I-X, Torino – Roma, Casa Editrice Marietti, 1930-1933.

## Text encoding methods {#TextEncodingMethods}

The scans of the individual pages of the entire *Liber Sacramentorum* were processed using [**Tesseract**](https://tesseract-ocr.github.io/) to extract plain text, which was then encoded according to [**Markdown**](https://www.markdownguide.org/getting-started/) standards: a separate file of the type `Festum.md` was created for each section.

Using [**Pandoc**](https://pandoc.org/), the text was then transcoded from **Markdown** to **HTML** with the following specific command:

```sh
    pandoc -o output.html input.md
```

The resulting code was then inserted into a series of specially designed templates: for each individual section of the *Liber Sacramentorum*, an **HTML** page of the type [`Caput_00.html`](#Caput) was created.  

The general index of each of the ten volumes that form the *Liber Sacramentorum* was encoded in an **HTML** page of the type [`Volumen_00.html`](#Volumen) instead, allowing access to every individual section into which the volume is divided.

In the [homepage](#Domus), the colophon of each volume is displayed, allowing access to the index of each one.

The formatting and animation of the entire site's pages are expressed in [CSS](#CSS) and [JavaScript](#JS), respectively.

## Structure of single pages {#Page-Structure}

The general structure of the individual **HTML** pages is presented here below.

### Domus {#Domus}

This is the code for the homepage.

```html
<!DOCTYPE html>

<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Domus</title>
    <link rel="stylesheet" href="Stilus/Stilus.css">
    <script src="Stilus/Scaenarium.js" defer></script>
</head>

<body>
    <header>
        <h1>
            <span>LIBER SACRAMENTORUM</span>
            <span style="display: block;">NOTE STORICHE E LITURGICHE SUL MESSALE ROMANO</span>
        </h1>
    </header>
    
    <nav>
        <p style="text-align: center;"><a><img src="Imagines/Titulus.jpg" alt="Titolo"></a></p>
        <hr />
        <p style="text-align: center;"><a href="Volumen_00.html"><img src="Imagines/Volumen_00.jpg" alt="Volume 0"></a></p>
    </nav>
    
    <main>
        <hr />
    </main>
    
    <footer>
        <p>Codifica ed edizione digitale a cura di Alessandro Re.</p>
        <p>Il contenuto di questo documento è disponibile secondo licenza Creative Commons 4.0 del tipo “Attribution – NonCommercial – ShareAlike 4.0 International” (CC BY-NC-SA 4.0).</p>
        <p><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en">Commons Deed</a></p>
        <p><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode">Legal Code</a></p>
        <p>Ogni eventuale segnalazione, correzione di errori o miglioramento dei contenuti di questo documento può essere fatta scrivendo un messaggio di posta elettronica all’indirizzo <a href="mailto:rabrelat@gmail.com" class="email">rabrelat@gmail.com</a>.</p>
    </footer>
</body>
</html>
```

### Volumen {#Volumen}

The index of each volume features this code.

```html
<!DOCTYPE html>

<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Volume 0</title>
    <link rel="stylesheet" href="Stilus/Stilus.css">
    <script src="Stilus/Scaenarium.js" defer></script>
</head>

<body>
    <header>
        <h1>
            <span>LIBER SACRAMENTORUM</span>
            <span style="display: block;">NOTE STORICHE E LITURGICHE SUL MESSALE ROMANO</span>
            <span style="display: block; padding-top: 20px;">Volume 0:</span>
            <span style="display: block;">Titolo del Volume 0</span>
            <span style="display: block;">(Sottotitolo del Volume 0)</span>
        </h1>
    </header>
    
    <nav>
        <h2 id="sottotitolo.">
            <span style="display: block;">INDICE</span>
            <span>Titolo.</span>
        </h2>

        <h3 id="introduzione.">Introduzione.</h3>
        <ol type="1">
            <li><a href="Volumen_00/Caput_0-1.html">Capitolo I.</a></li>
            <li><a href="Volumen_00/Caput_0-2.html">Capitolo II.</a></li>
        </ol>
    </nav>

    <main>
        <hr />
    </main>
    
    <footer>
        <p>Alfredo Ildefonso Schuster, <em>Liber Sacramentorum</em>, vol. 0, Torino – Roma, Casa Editrice Marietti, 19.., pp. 000-000.</p>
        <p>Codifica ed edizione digitale a cura di Alessandro Re.</p>
        <p>Il contenuto di questo documento è disponibile secondo licenza Creative Commons 4.0 del tipo “Attribution – NonCommercial – ShareAlike 4.0 International” (CC BY-NC-SA 4.0).</p>
        <p><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en">Commons Deed</a></p>
        <p><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode">Legal Code</a></p>
        <p>Eventuali segnalazioni, correzioni d’errori o miglioramenti dei contenuti di questo documento possono essere inviati all’indirizzo di posta elettronica <a href="mailto:rabrelat@gmail.com" class="email">rabrelat@gmail.com</a>.</p>
    </footer>
</body>
</html>
```

### Caput {#Caput}

Each chapter presents this structure.

```html
<!DOCTYPE html>

<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titolo della pagina</title>
    <link rel="stylesheet" href="../Stilus/Stilus.css">
    <script src="../Stilus/Scaenarium.js" defer></script>
</head>

<body>
    <header>
        <h1>
            <span><a href="../Domus.html" class="no-blue">LIBER SACRAMENTORUM</a></span>
            —
            <span><a href="../Volumen_00.html" class="no-blue">Volume 0</a></span>
        </h1>
        <h2>TITOLO DEL VOLUME 0</h2>
    </header>

    <main>
        <section>
            <h3 id="titolo">TITOLO</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id odio mauris. Donec porttitor massa non quam bibendum, et dignissim lectus eleifend. Ut ultricies placerat convallis. Aenean ac dapibus neque. Aenean dapibus sem sapien, ut sollicitudin massa lacinia ut. Nunc vulputate finibus nisi id pharetra. Sed aliquet leo libero, accumsan tincidunt tortor mattis eget. Mauris eget dui a enim gravida cursus. Donec commodo tellus ante, sed laoreet erat blandit placerat. Nulla imperdiet mi sit amet lectus suscipit vestibulum. Proin hendrerit nec erat eget tempor. Fusce vel leo luctus justo ultrices semper eu quis lectus. Sed magna nisl, hendrerit in auctor ut, ultrices et elit. Nam tincidunt ac ipsum quis placerat. Aenean ultrices mattis dui sodales pharetra. Morbi convallis quam at eros tristique venenatis.</p>
            <hr />
            <p>Aliquam et nibh sed ligula consectetur imperdiet ac sit amet enim. Vivamus aliquet semper quam, sit amet convallis risus ullamcorper a. Aliquam condimentum in mi a consequat. Nullam ac tellus sed leo porttitor vestibulum. Pellentesque nec malesuada diam, vel bibendum ante. Curabitur cursus tristique tortor sit amet venenatis. In hac habitasse platea dictumst. Aliquam viverra id urna vitae bibendum. Pellentesque ut mattis quam. Maecenas et fringilla ex, quis dictum felis. Sed pulvinar nec mauris quis fringilla.</p>
            <hr />
        </section>
    </main>

    <footer>
        <p>Alfredo Ildefonso Schuster, <em>Liber Sacramentorum</em>, vol. 0, Torino – Roma, Casa Editrice Marietti, 19.., pp. 000-000.</p>
    </footer>
</body>
</html>
```

## Cascading Style Sheet {#CSS}

The file `Stilus.css` defines the presentation and styling that regulate the entire website according to the following criteria.

```css
body
{
    font-family: "EB Garamond", serif;
    font-size: 17pt;
    padding-left: 60px;
    padding-right: 60px;
    padding-bottom: 20px;
}

h1, h2, h3, h4, header, footer
{
    font-family: "Montserrat", sans-serif;
}

header
{
    text-align: center;
}

p
{
    text-align: justify;
    hyphens: auto;
    word-spacing: -0.05em;
    letter-spacing: 0.02em;
}

.no-blue
{
    color: inherit;
}

nav a img {
    width: 500px;
    height: auto;
    border-radius: 10px;
    border: 2px solid #ccc;
    padding: 5px;
    background-color: white;
}
```

Other specific inline styles are declared within individual HTML tags.

## JavaScript {#JS}

The automations that manage certain functions of the entire website are defined in the `Scaenarium.js` file.

```js
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("a:not(.footnote-back):not(.footnote-ref)").forEach(link => {
        link.setAttribute("target", "_blank"); // Apre in una nuova scheda
        link.setAttribute("rel", "noopener noreferrer");
    });
});
```
