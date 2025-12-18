import { Lang } from "../i18n.ts";
import { define } from "../utils.ts";

function LanguageToggle({ lang }: { lang: Lang }) {
  const isZhHK = lang === "zh-HK";

  return (
    <div class="fixed top-4 right-6 z-50 text-sm bg-white/85 backdrop-blur-sm px-3 py-2 rounded-full shadow-md">
      <a
        href="?lang=en"
        class={`px-2 py-1 rounded-xl transition-all ${
          !isZhHK
            ? "text-amber-600 font-semibold"
            : "text-stone-500 hover:text-amber-600"
        }`}
      >
        EN
      </a>
      <span class="text-stone-500/40 mx-1">|</span>
      <a
        href="?lang=zh-HK"
        class={`px-2 py-1 rounded-xl transition-all ${
          isZhHK
            ? "text-amber-600 font-semibold"
            : "text-stone-500 hover:text-amber-600"
        }`}
      >
        中
      </a>
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
