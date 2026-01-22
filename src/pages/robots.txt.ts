import type { APIRoute } from "astro";

// 修复robots.txt语法 - 确保格式符合标准
const robotsTxt = `User-agent: *
Allow: /
Disallow: /_astro/

Sitemap: ${new URL("sitemap-index.xml", import.meta.env.SITE).href}`;

export const GET: APIRoute = () => {
	return new Response(robotsTxt, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};
