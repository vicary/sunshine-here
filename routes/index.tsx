import { define } from "../utils.ts";

export default define.page(function Home() {
  return (
    <div class="main-gradient full-screen">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div class="avatar-circle">
          <img
            src="/logo.png"
            width="128"
            height="128"
            alt="brand avatar"
          />
        </div>
        <a
          class="social-link"
          href="https://www.instagram.com/sunshinehere02/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  );
});
