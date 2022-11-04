<template>
  <main>
    <router-view />
  </main>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@font-face {
  font-family: 'iconly';
  src: url('@/assets/fonts/icons/iconly.eot');
  src: url('@/assets/fonts/icons/iconly.eot') format('embedded-opentype'), url('@/assets/fonts/icons/iconly.woff') format('woff'),
    url('@/assets/fonts/icons/iconly.ttf') format('truetype'), url('@/assets/fonts/icons/iconly.svg') format('svg');

  font-display: swap;
}

i {
  color: var(--scheme-v4);

  /* use !important to prevent issues with browser extensions that change fonts */
  font: 300 30px / 1 'iconly' !important;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-bag:before {
  content: '\e900';
}
.icon-buy:before {
  content: '\e901';
}
.icon-call:before {
  content: '\e902';
}
.icon-download:before {
  content: '\e903';
}
.icon-filter:before {
  content: '\e904';
}
.icon-lock:before {
  content: '\e905';
}
.icon-password:before {
  content: '\e906';
}
.icon-shield-done:before {
  content: '\e907';
}
.icon-swap:before {
  content: '\e908';
}
.icon-tick-square:before {
  content: '\e909';
}
.icon-ticket-star:before {
  content: '\e90a';
}
.icon-wallet:before {
  content: '\e90b';
}
.icon-search:before {
  content: '\e016';
}

// initialize project fonts from @assets
@font-face {
  font-family: 'Renner*';
  src: local('@/assets/fonts/renner-light'), url('@/assets/fonts/renner-light.otf') format('opentype');
  font-weight: 300;
}

@font-face {
  font-family: 'Renner*';
  src: local('@/assets/fonts/renner-book'), url('@/assets/fonts/renner-book.otf') format('opentype');
  font-weight: 400;
}

@font-face {
  font-family: 'Renner*';
  src: local('@/assets/fonts/renner-medium'), url('@/assets/fonts/renner-medium.otf') format('opentype');
  font-weight: 500;
}

:root {
  // project color palete
  --scheme-v1: #ffffff;
  --scheme-v2: #4c6e6e;
  --scheme-v3: #4e94d7; // primary scheme
  --scheme-v4: #edeadf;

  // project font-family
  --scheme-font: 'Renner*', 'Helvetica', sans-serif;
  --scheme-h: 46px;
  --scheme-m: 32px;
  --scheme-s: 17px;

  // project default template width
  --scheme-max-width: 2160px; // desktop
  --scheme-min-width: 320px; // 5 SE

  // project default template height
  --scheme-min-height: 568px; // 5 SE

  // project default template gap
  --scheme-gap: 40px;

  // project ex. header & footer height
  --scheme-offset: 100px;
}

// project reset css
* {
  box-sizing: border-box;
}

html,
body {
  background: var(--scheme-v2);
  margin: 0;
}

body {
  color: var(--scheme-v1);

  font: 300 var(--scheme-s) / 1.64 var(--scheme-font);

  // user-select: none;
  ::selection {
    background: var(--scheme-v3);
  }
  position: relative;
}

main,
section {
  position: relative;
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: 300;
  margin: 0;
}

h1 {
  font: 300 var(--scheme-h) / 1.42 var(--scheme-font);
}

h2 {
  font: 300 var(--scheme-m) / 1.42 var(--scheme-font);
}

h3 {
  font: 400 var(--scheme-s) / 1.42 var(--scheme-font);
}

a {
  color: inherit;
  text-decoration: none;
}

b {
  font-weight: 400;
}

p {
  margin: 0;
}

strong {
  font: inherit;
}

ul {
  margin: 0;
  padding: 0;

  li {
    list-style: none;
  }
}

figure {
  margin: 0;

  img {
    display: block;
    // object-fit: cover;
    width: 100%;
  }

  svg {
    vertical-align: middle;
  }
}

picture {
  img {
    width: 100%;
  }
}

input,
button {
  background: none;
  border: none;
  box-shadow: none;

  font: var(--scheme-font);

  margin: 0;
  outline: none;
  padding: 0;
}
</style>
