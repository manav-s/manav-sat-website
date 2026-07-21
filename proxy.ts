import { NextRequest, NextResponse } from "next/server";

// Serves markdown to AI agents: /blog/<slug>.md URLs and Accept: text/markdown
// content negotiation both rewrite to the markdown route handlers.
export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const mdPath = pathname.match(/^\/blog\/([^/]+)\.md$/);
  if (mdPath) {
    const url = request.nextUrl.clone();
    url.pathname = `/blog-md/${mdPath[1]}`;
    return NextResponse.rewrite(url);
  }

  const accept = request.headers.get("accept") ?? "";
  if (accept.includes("text/markdown")) {
    const url = request.nextUrl.clone();
    if (pathname === "/") {
      url.pathname = "/index.md";
      return NextResponse.rewrite(url);
    }
    const blogPost = pathname.match(/^\/blog\/([^/]+)$/);
    if (blogPost) {
      url.pathname = `/blog-md/${blogPost[1]}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/blog/:slug*"],
};
