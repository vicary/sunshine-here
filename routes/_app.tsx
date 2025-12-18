import { define, type Lang } from "../utils.ts";

const linkStyle = (active: boolean) =>
  `px-2 py-1 rounded-xl transition-all ${
    active
      ? "text-amber-600 font-semibold"
      : "text-stone-500 hover:text-amber-600"
  }`;

function LanguageToggle({ lang }: { lang: Lang }) {
  return (
    <div class="fixed top-4 right-6 z-50 text-sm bg-white/85 backdrop-blur-sm px-3 py-2 rounded-full shadow-md">
      <a href="?lang=en" class={linkStyle(lang === "en")}>EN</a>
      <span class="text-stone-500/40 mx-1">|</span>
      <a href="?lang=zh-HK" class={linkStyle(lang === "zh-HK")}>中</a>
    </div>
  );
}

export default define.page(function App({ Component, state }) {
  return (
    <html lang={state.lang}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{state.title ?? "Sunshine Here"}</title>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#d97706" />
        <script
          src="https://kit.fontawesome.com/55ef370e6a.js"
          crossorigin="anonymous"
        >
        </script>
      </head>
      <body class="font-sans text-stone-700 leading-relaxed">
        <LanguageToggle lang={state.lang} />
        <Component />
      </body>
    </html>
  );
});
