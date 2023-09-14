

export const siteConfig = {
  // General Information
  name: "Doctor of the Future",
  description: "Your trusted healthcare partner for a healthier tomorrow",
  url: "https://mydoctorofthefuture.com",
  ogImage: "/dotf_logo.png",

  // Navigation
  navigation: [
    { name: "Home", href: "/" },
    { name: "Bookings", href: "/bookings" },
    { name: "Blog", href: "/blog" },
    { name: "Shop", href: "/shop" },
    { name: "Plans", href: "/plans" },
    { name: "Policies", href: "/policies" },
    { name: "Programs", href: "/programs" },
    { name: "Terms", href: "/terms" },
  ],

  // Contact Information
  contact: {
    email: "gidietsworld@gmail.com",
    phone: "+234 912 318 5655",
    address: "Lagos, Nigeria",
  },

  // Social Media Links
  socialMedia: {
    facebook: "https://www.facebook.com/doctorofthefuture",
    twitter: "https://twitter.com/g_diets_",
  },

  // Logo and Favicon URLs
  logoUrl: "/dotf_logo.png",
  faviconUrl: "/favicon.ico",

  // API Endpoints
  apiEndpoints: {
    bookings: "/api/bookings",
    blogPosts: "/api/blog/",
    shopProducts: "/api/shop",
  },

  // Analytics
  analytics: {
    googleAnalyticsId: "UA-12345678-1",
    facebookPixelId: "1234567890",
  },
  // SEO Settings
  seo: {
    // Title template for SEO titles (can include %s as a placeholder for dynamic titles)
    titleTemplate: "%s | Doctor of the Future",

    // Default meta description for SEO
    defaultMetaDescription: "Your trusted healthcare partner for a healthier tomorrow",

    // Additional meta tags for SEO
    metaTags: [
      { name: "keywords", content: "healthcare, future, doctor, appointments, food, exercise, wellness, healthy, nigerian, diet, workouts" },
      { name: "author", content: "Doctor of the Future" },
    ],

    // Open Graph (OG) settings for social media sharing
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://www.mydoctorofthefuture.com",
      siteName: "Doctor of the Future",
    },

    // Twitter Card settings for Twitter sharing
    twitterCard: {
      cardType: "summary_large_image",
      site: "@g_diets_",
    },
  },

  // Other Configuration Options
  // Example:
  // customOption: "Custom value",
};
