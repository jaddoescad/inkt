/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: "INK'T Screen Printing",
  author: 'Sabrina',
  headerTitle: "INK'T",
  description:
    "Ottawa's trusted screen printing and embroidery company since 2005, providing quality custom clothing and dependable service.",
  language: 'en-ca',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.inkt.vercel.app', // Assumed URL, please replace with actual URL
  siteRepo: 'https://github.com/inkt-screenprinting/website', // Assumed repo, please replace with actual repo
  siteLogo: `https://gdtffvonnguufizhazwx.supabase.co/storage/v1/object/public/test/919cb172-25de-421c-90ea-3e66b8c0338d.png`,
  socialBanner: `https://gdtffvonnguufizhazwx.supabase.co/storage/v1/object/public/test/919cb172-25de-421c-90ea-3e66b8c0338d.png`,
  email: 'info@inkt-screenprinting.ca', // Assumed email, please replace with actual email
  github: 'https://github.com/inkt-screenprinting', // Assumed GitHub, please replace with actual GitHub
  x: 'https://twitter.com/inktscreenprint', // Assumed X (Twitter) handle, please replace with actual handle
  facebook: 'https://facebook.com/inktscreenprinting', // Assumed Facebook, please replace with actual Facebook
  instagram: 'https://www.instagram.com/inktscreenprinting', // Assumed Instagram, please replace with actual Instagram
  linkedin: 'https://www.linkedin.com/company/inkt-screen-printing', // Assumed LinkedIn, please replace with actual LinkedIn
  locale: 'en-CA',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
      // You may also need to overwrite the script if you're storing data in the US - ex:
      // src: 'https://us.umami.is/script.js'
      // Remember to add 'us.umami.is' in `next.config.js` as a permitted domain for the CSP
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // If you are hosting your own Plausible.
    //   src: '', // e.g. https://plausible.my-domain.com/js/script.js
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
