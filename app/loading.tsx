export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="glass-panel relative flex w-[22rem] flex-col items-center gap-5 rounded-[2rem] px-8 py-10">
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/10" />
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
          <div className="h-8 w-8 animate-pulse rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500" />
        </div>
        <div className="relative space-y-2 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-primary">
            Loading Portfolio
          </p>
          <p className="text-sm text-muted-foreground">
            Preparing a recruiter-ready experience.
          </p>
        </div>
        <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted/70">
          <div className="h-full w-full animate-shimmer bg-[linear-gradient(90deg,transparent,rgba(56,189,248,0.8),transparent)] bg-[length:200%_100%]" />
        </div>
      </div>
    </div>
  );
}
