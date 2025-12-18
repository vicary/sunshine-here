import { acceptsLanguages } from "@std/http/negotiation";
import { App, staticFiles } from "fresh";
import { isLang, type State } from "./utils.ts";

export const app = new App<State>();

app.use(staticFiles());

// Language detection middleware
app.use((ctx) => {
  const langParam = new URL(ctx.req.url).searchParams.get("lang");

  if (isLang(langParam)) {
    ctx.state.lang = langParam;
  } else {
    // Content negotiation for zh-HK variants and en
    const match = acceptsLanguages(ctx.req, "zh-HK", "zh-TW", "zh", "en");
    ctx.state.lang = match?.startsWith("zh") ? "zh-HK" : "en";
  }

  return ctx.next();
});

// Include file-system based routes here
app.fsRoutes();
