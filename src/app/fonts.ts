// src/app/fonts.ts
import localFont from "next/font/local";

/**
 * ▶ 각 폰트의 실제 파일명을 path에 맞춰 수정하세요.
 *   (이 파일을 기준으로 한 '상대 경로'입니다)
 */

export const cafe24Ssurround = localFont({
  variable: "--font-cafe24",
  display: "swap",
  src: [
    { path: "../assets/fonts/Cafe24Ssurround-v2.0.woff2", weight: "700", style: "normal" },
  ],
});

export const cafe24Shining = localFont({
  variable: "--font-shining",
  display: "swap",
  src: [{ path: "../assets/fonts/Cafe24Shiningstar-v2.0.woff2", weight: "400", style: "normal" }],
});

export const oneMobile = localFont({
  variable: "--font-onemobile",
  display: "swap",
  src: [
    { path: "../assets/fonts/ONE Mobile Light.woff2", weight: "300", style: "normal" },
    { path: "../assets/fonts/ONE Mobile Regular.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/ONE Mobile Bold.woff2", weight: "700", style: "normal" },
  ],
});

export const oneMobileBold = localFont({
  variable: "--font-onemobile-bold",
  display: "swap",
  src: [
    { path: "../assets/fonts/ONE Mobile OTF Light.woff2", weight: "300", style: "normal" },
    { path: "../assets/fonts/ONE Mobile OTF Regular.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/ONE Mobile OTF Bold.woff2", weight: "700", style: "normal" },
  ],
});
