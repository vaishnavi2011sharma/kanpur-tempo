/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
<<<<<<< HEAD

  async redirects() {
    return [
      // Old URL format → New URL format (301 permanent redirect for SEO)
      {
        source: '/tempo-traveller/:city',
        destination: '/tempo-traveller-in-:city',
        permanent: true,
      },
    ]
  },
=======
>>>>>>> fba7258094bd8ad0ffc5701764d46236b1d04483
}

module.exports = nextConfig
