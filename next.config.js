/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['mbnemsldvvdwgccnprri.supabase.co'], // Remove https:// and trailing slash
  },
  async redirects() {
    return [
      { source: '/what_we_do', destination: '/whatwedo', permanent: true },
      { source: '/what-we-do', destination: '/whatwedo', permanent: true },
      { source: '/how_we_operate', destination: '/howweoperate', permanent: true },
      { source: '/how-we-operate', destination: '/howweoperate', permanent: true },
      { source: '/our_team', destination: '/ourteam', permanent: true },
      { source: '/our-team', destination: '/ourteam', permanent: true },
      { source: '/our-team-clone', destination: '/ourteam', permanent: true },
      { source: '/our_story', destination: '/aboutus', permanent: true },
      { source: '/our-story', destination: '/aboutus', permanent: true },
      { source: '/our-founder', destination: '/ourteam/Zile%20Yu', permanent: true },
      { source: '/contact_us', destination: '/contact', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/terms-of-use', destination: '/termsofuse', permanent: true },
      { source: '/resources', destination: '/news', permanent: true },
      { source: '/friends', destination: '/aboutus', permanent: true },
      { source: '/home-page-2', destination: '/', permanent: true },
      { source: '/zile-yu', destination: '/ourteam/Zile%20Yu', permanent: true },
      { source: '/william-wang', destination: '/ourteam/William%20Wang', permanent: true },
      { source: '/daven-rasaratnam', destination: '/ourteam/Daven%20Rasaratnam', permanent: true },
      { source: '/adriana-vontelas', destination: '/ourteam/Adriana%20Vontelas', permanent: true },
      { source: '/jordan-paris', destination: '/ourteam', permanent: true },
      { source: '/2019/06/24/rising-star-of-the-year-award-australian-law-awards-2019', destination: '/news/archive/rising-star-of-the-year-award-australian-law-awards-2019', permanent: true },
      { source: '/2020/03/19/coronavirus-vaccine-for-your-business-force-majeure-clauses-can-save-you', destination: '/news/archive/coronavirus-vaccine-for-your-business-force-majeure-clauses-can-save-you', permanent: true },
      { source: '/2020/04/23/30-under-30-dispute-resolution-and-litigation-award-lawyers-weekly', destination: '/news/archive/30-under-30-dispute-resolution-and-litigation-award-lawyers-weekly', permanent: true },
      { source: '/2020/07/26/sole-practitioner-of-the-year-australian-law-awards-lawyers-weekly', destination: '/news/archive/sole-practitioner-of-the-year-australian-law-awards-lawyers-weekly', permanent: true },
      { source: '/2020/10/10/partner-of-the-year-awards-lawyers-weekly', destination: '/news/archive/partner-of-the-year-awards-lawyers-weekly', permanent: true },
    ];
  },
}

module.exports = nextConfig
