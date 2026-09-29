This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Web Analytics

Vercel Web Analytics is included in `app/layout.tsx` through
`@vercel/analytics/next`, so it tracks page views across the site. Keep Web
Analytics enabled in the Vercel project dashboard, then deploy and visit the
site to start collecting data.

View visitors, page views, referrers, and other traffic metrics in the project's
Analytics tab. Tracking starts after installation; earlier visits cannot be
recovered. Analytics uses debug mode during local development.

## Speed Insights

`app/layout.tsx` also includes `SpeedInsights` from
`@vercel/speed-insights/next` to collect real-user performance metrics across
the site. Keep Speed Insights enabled in the Vercel project dashboard and
check its Speed Insights tab after deploying and receiving visits. Metrics
include Core Web Vitals; earlier performance data cannot be recovered.

## Text inquiries

Homepage and blog inquiry buttons use `components/sms-link.tsx` to open a draft
to the coaching number with "Hi, I'm looking for SAT coaching for my child".
The link uses the appropriate message-body separator for Apple and Android
devices. The visitor must still send the message in their messaging app.
