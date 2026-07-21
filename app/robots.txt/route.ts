import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const AI_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "meta-externalagent",
  "Amazonbot",
  "CCBot",
  "DuckAssistBot",
  "cohere-ai",
];

const CONTENT_SIGNAL = "Content-Signal: search=yes, ai-input=yes, ai-train=yes";

export function GET() {
  const body = [
    "# Content Signals declare how this content may be used (contentsignals.org):",
    "#   search    -> building a search index and showing links to this site",
    "#   ai-input  -> using content as input to AI (grounding, RAG, answers)",
    "#   ai-train  -> training or fine-tuning AI models",
    "",
    "User-Agent: *",
    CONTENT_SIGNAL,
    "Allow: /",
    "",
    ...AI_BOTS.map((bot) => `User-Agent: ${bot}`),
    CONTENT_SIGNAL,
    "Allow: /",
    "",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
    `# Markdown for agents: ${SITE_URL}/llms.txt and ${SITE_URL}/llms-full.txt`,
    "# Any page also serves markdown via Accept: text/markdown",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
