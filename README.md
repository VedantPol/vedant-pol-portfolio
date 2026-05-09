# Vedant Pol Portfolio

Animated React portfolio built with Vite and Framer Motion.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy On Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Use the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`

The resume file is available at `/Vedant-Pol-Resume.pdf`.

## Cloudflare DNS

After Vercel creates the project, add your custom domain in Vercel and point Cloudflare DNS to Vercel:

- Apex domain: `A` record to `76.76.21.21`
- `www` subdomain: `CNAME` record to `cname.vercel-dns.com`

Keep Cloudflare proxy off until Vercel verifies the domain.
