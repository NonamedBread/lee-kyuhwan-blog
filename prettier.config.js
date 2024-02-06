module.exports = {
  plugins: ["prettier-plugin-tailwindcss"], // prettier-plugin-tailwindcss 플러그인을 사용합니다.
  tailwindcss: {
    config: "./tailwind.config.js", // Tailwind CSS 설정 파일의 경로를 설정합니다.
    format: "auto", // Tailwind CSS 클래스를 정렬할 때 사용할 방법을 설정합니다.
  }, // Tailwind CSS와 관련된 설정은 여기에 추가될 수 있습니다.
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"], // 프로젝트에서 사용되는 파일들의 경로를 설정합니다.
    options: {
      safelist: ["prose", "prose-sm", "m-auto"], // PurgeCSS에서 제외할 클래스들을 설정합니다.
    },
  },
  trailingComma: "all",
  tabWidth: 2, // 탭 간격을 설정합니다.
  semi: true, // 세미콜론 사용 여부를 설정합니다.
  singleQuote: true, // 문자열을 작은따옴표로 표시할지 설정합니다.
  printWidth: 150, // 줄 바꿈을 수행할 컬럼 수를 설정합니다.
};
