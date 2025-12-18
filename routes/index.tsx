import { t } from "../i18n.ts";
import { define } from "../utils.ts";

export default define.page(function Home({ state }) {
  const { lang } = state;

  return (
    <div class="min-h-screen">
      {/* Hero + Services Section */}
      <section class="py-16 px-8 bg-linear-to-b from-amber-50 to-amber-100 flex flex-col items-center">
        <header class="pb-12 text-center">
          <div class="flex flex-col items-center">
            <div class="bg-white rounded-full p-3 shadow-lg mb-10">
              <img
                class="rounded-full object-cover"
                src="/logo.png"
                width="120"
                height="120"
                alt="Sunshine Here Limited Logo"
              />
            </div>
            <p class="text-xl text-amber-600 italic mb-4">
              {t(lang, "tagline")}
            </p>
            <p class="max-w-xl text-stone-500 text-lg">
              {t(lang, "heroDescription")}
            </p>
          </div>
        </header>

        <div class="flex flex-col gap-10 w-full max-w-4xl">
          <div class="bg-white p-8 md:p-10 rounded-2xl md:rounded-l-2xl md:rounded-r-[40px] shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col md:flex-row gap-8 items-start self-start md:max-w-[85%]">
            <i class="fa-solid fa-sun text-5xl text-amber-600 w-16 text-left md:text-center shrink-0">
            </i>
            <div class="flex-1 text-left">
              <h3 class="text-xl font-semibold mb-2 text-stone-700">
                {t(lang, "service1Title")}
              </h3>
              <p class="text-base text-amber-600 italic mb-4">
                {t(lang, "service1Subtitle")}
              </p>
              <p class="text-stone-500 leading-relaxed mb-3">
                {t(lang, "service1Text1")}
              </p>
              <p class="text-stone-500 leading-relaxed">
                {t(lang, "service1Text2")}
              </p>
            </div>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-2xl md:rounded-r-2xl md:rounded-l-[40px] shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col md:flex-row-reverse gap-8 items-start self-end md:max-w-[85%]">
            <i class="fa-solid fa-home text-5xl text-amber-600 w-16 text-left md:text-center shrink-0">
            </i>
            <div class="flex-1 text-left">
              <h3 class="text-xl font-semibold mb-2 text-stone-700">
                {t(lang, "service2Title")}
              </h3>
              <p class="text-base text-amber-600 italic mb-4">
                {t(lang, "service2Subtitle")}
              </p>
              <p class="text-stone-500 leading-relaxed mb-3">
                {t(lang, "service2Text1")}
              </p>
              <p class="text-stone-500 leading-relaxed">
                {t(lang, "service2Text2")}
              </p>
            </div>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-2xl md:rounded-l-2xl md:rounded-r-[40px] shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col md:flex-row gap-8 items-start self-start md:max-w-[85%]">
            <i class="fa-solid fa-seedling text-5xl text-amber-600 w-16 text-left md:text-center shrink-0">
            </i>
            <div class="flex-1 text-left">
              <h3 class="text-xl font-semibold mb-2 text-stone-700">
                {t(lang, "service3Title")}
              </h3>
              <p class="text-base text-amber-600 italic mb-4">
                {t(lang, "service3Subtitle")}
              </p>
              <p class="text-stone-500 leading-relaxed mb-3">
                {t(lang, "service3Text1")}
              </p>
              <p class="text-stone-500 leading-relaxed">
                {t(lang, "service3Text2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section class="py-16 px-8 bg-amber-100" id="about">
        <h2 class="text-3xl font-semibold text-center mb-10 text-stone-700">
          {t(lang, "aboutTitle")}
        </h2>
        <div class="max-w-2xl mx-auto text-center">
          <p class="mb-4 text-stone-500 text-lg leading-loose">
            {t(lang, "aboutFounder")}
          </p>
          <p class="mb-4 text-stone-500 text-lg leading-loose">
            {t(lang, "aboutText1")}
          </p>
          <p class="mb-4 text-stone-500 text-lg leading-loose">
            {t(lang, "aboutText2")}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section class="py-16 px-8 bg-amber-50" id="contact">
        <h2 class="text-3xl font-semibold text-center mb-10 text-stone-700">
          {t(lang, "contactTitle")}
        </h2>
        <div class="flex flex-col items-center gap-6 max-w-lg mx-auto mb-8">
          <div class="flex items-start gap-4 bg-white px-6 py-5 rounded-xl shadow-sm w-full sm:w-auto sm:min-w-[360px]">
            <i class="fa-solid fa-envelope text-2xl text-amber-600 mt-1"></i>
            <div class="flex flex-col">
              <strong class="text-sm text-stone-500 mb-1">
                {t(lang, "email")}
              </strong>
              <a
                href="mailto:hello@sunshine-here.com"
                class="text-stone-700 hover:text-amber-600 transition-colors"
              >
                hello@sunshine-here.com
              </a>
            </div>
          </div>
          <div class="flex items-start gap-4 bg-white px-6 py-5 rounded-xl shadow-sm w-full sm:w-auto sm:min-w-[360px]">
            <i class="fa-solid fa-location-dot text-2xl text-amber-600 mt-1">
            </i>
            <div class="flex flex-col">
              <strong class="text-sm text-stone-500 mb-1">
                {t(lang, "address")}
              </strong>
              <span class="text-stone-700">{t(lang, "addressText")}</span>
            </div>
          </div>
        </div>
        <div class="flex justify-center gap-4">
          <a
            class="flex items-center justify-center w-14 h-14 bg-white rounded-full text-stone-600 text-3xl shadow-sm hover:bg-amber-600 hover:text-white hover:scale-110 transition-all"
            href="https://www.instagram.com/sunshinehere02/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer class="bg-stone-700/95 text-white/90 py-8 px-8">
        <div class="flex flex-col items-center gap-4 text-center">
          <p class="text-sm opacity-80">
            &copy; {new Date().getFullYear()} SUNSHINE HERE LIMITED.{" "}
            {t(lang, "copyright")}
          </p>
          <div class="flex items-center gap-4">
            <a href="/privacy" class="text-white/80 text-sm hover:text-white">
              {t(lang, "privacyPolicy")}
            </a>
            <span class="text-white/40">|</span>
            <a href="/terms" class="text-white/80 text-sm hover:text-white">
              {t(lang, "termsOfService")}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
});
