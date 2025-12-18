import { acceptsLanguages } from "@std/http/negotiation";
import { App, staticFiles } from "fresh";
import { type Lang } from "./i18n.ts";
import { type State } from "./utils.ts";

export const app = new App<State>();

app.use(staticFiles());

// Language detection middleware
app.use((ctx) => {
  // Check for explicit lang query param first
  const url = new URL(ctx.req.url);
  const langParam = url.searchParams.get("lang") as Lang | null;

  if (langParam && (langParam === "en" || langParam === "zh-HK")) {
    ctx.state.lang = langParam;
  } else {
    // Use @std/http for proper content negotiation
    // Pass supported languages: zh-HK variants and en variants
    const match = acceptsLanguages(
      ctx.req,
      "zh-HK",
      "zh-TW",
      "zh",
      "en",
    );
    ctx.state.lang = match?.startsWith("zh") ? "zh-HK" : "en";
  }

  return ctx.next();
});

// Include file-system based routes here
app.fsRoutes();
