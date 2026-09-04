export function getBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000"
  );
}

export function isConfiguredLink(value?: string | null) {
  if (!value) {
    return false;
  }

  const normalized = value.trim().toLowerCase();

  if (!normalized) {
    return false;
  }

  return ![
    "your-github-username",
    "your-linkedin-handle",
    "your.email@example.com",
    "placeholder"
  ].some(token => normalized.includes(token));
}

export function isConfiguredText(value?: string | null) {
  return Boolean(value && value.trim().length > 0);
}
