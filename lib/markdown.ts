import { BLOG_POSTS, type BlogPost } from "@/app/blog/posts";
import { SITE_NAME, SITE_URL } from "./site";

export function postToMarkdown(post: BlogPost): string {
  const lines: string[] = [
    `# ${post.title}`,
    "",
    `By Manav Sharma · Published ${post.publishedAt} · ${post.readingTime}`,
    "",
    `> ${post.description}`,
    "",
  ];

  if (post.videoId) {
    lines.push(
      `Video version: https://www.youtube.com/watch?v=${post.videoId}`,
      "",
    );
  }

  for (const paragraph of post.intro) {
    lines.push(paragraph, "");
  }

  for (const section of post.sections) {
    lines.push(`## ${section.heading}`, "");
    for (const paragraph of section.body) {
      lines.push(paragraph, "");
    }
    if (section.bullets) {
      for (const bullet of section.bullets) {
        lines.push(`- ${bullet}`);
      }
      lines.push("");
    }
  }

  for (const paragraph of post.closing) {
    lines.push(paragraph, "");
  }

  lines.push(
    "---",
    "",
    `Canonical: ${SITE_URL}/blog/${post.slug}`,
    "",
    "Want a second set of eyes on a practice test? Text Manav at 347-722-4114.",
  );

  return lines.join("\n");
}

export function homepageMarkdown(): string {
  const postList = BLOG_POSTS.map(
    (post) => `- [${post.title}](${SITE_URL}/blog/${post.slug}.md)`,
  ).join("\n");

  return `# ${SITE_NAME} — Private SAT Coaching with Manav Sharma

> Private SAT score reviews and 1:1 coaching with Manav Sharma — perfect 1600 SAT scorer, National Merit Scholar, and Microsoft software engineer.

## About Manav

- Perfect 1600 SAT score
- National Merit Scholar
- Software engineer at Microsoft, formerly JPMorgan Chase
- Five years of SAT teaching experience, 200+ students
- Average score increase across students: 170 points

## Services

1:1 private SAT coaching for high school students on the digital SAT, built
around the SAT Precision Framework: diagnose the exact leaks (content gaps,
recognition gaps, pacing, trap answers, execution errors), then drill the few
categories that keep costing points. Manav works with a small private roster
of students at a time so each family gets direct attention and a clear plan.

Free score review: send a recent practice test and Manav will tell you what is
actually holding the score back and whether 1:1 coaching makes sense.

## Contact

- Text: 347-722-4114
- Website: ${SITE_URL}

## SAT strategy articles

${postList}
`;
}

export function llmsTxt(): string {
  const postList = BLOG_POSTS.map(
    (post) =>
      `- [${post.title}](${SITE_URL}/blog/${post.slug}.md): ${post.description}`,
  ).join("\n");

  return `# ${SITE_NAME}

> Private SAT score reviews and 1:1 digital SAT coaching with Manav Sharma — perfect 1600 SAT scorer, National Merit Scholar, and Microsoft software engineer. 170-point average score increase across 200+ students.

Manav Sharma teaches the digital SAT using the SAT Precision Framework:
diagnose the exact reasons a student is losing points, then target those
categories instead of assigning generic practice. He works with a small
private roster of students at a time. Families can send a recent practice
test for a free score review by texting 347-722-4114.

## Site

- [Home](${SITE_URL}/index.md): Overview of Manav's credentials, coaching offer, and how to get a free score review
- [Blog](${SITE_URL}/blog): SAT strategy articles for students stuck in the 1300s and 1400s

## SAT strategy articles

${postList}
`;
}

export function llmsFullTxt(): string {
  const posts = BLOG_POSTS.map(postToMarkdown).join("\n\n---\n\n");
  return `${homepageMarkdown()}\n\n---\n\n${posts}`;
}
