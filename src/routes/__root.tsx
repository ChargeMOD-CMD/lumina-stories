import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AIAssistantOrb } from "@/components/AIAssistantOrb";
import { CinematicCursor } from "@/components/CinematicCursor";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-obsidian px-4">
      <div className="max-w-md text-center space-y-6">
        <span className="eyebrow">Scene 404</span>
        <h1 className="font-display text-7xl text-silk">Cut.</h1>
        <p className="text-silk/60">This frame doesn't exist in our reel.</p>
        <Link
          to="/"
          className="inline-flex items-center font-mono text-[10px] tracking-[0.25em] uppercase bg-gold text-obsidian px-6 py-3"
        >
          Back to Studio
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-obsidian px-4">
      <div className="max-w-md text-center space-y-6">
        <span className="eyebrow">Take 02</span>
        <h1 className="font-display text-3xl text-silk">A frame slipped.</h1>
        <p className="text-silk/60 text-sm">Something went off-script. Let's roll again.</p>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="font-mono text-[10px] tracking-[0.25em] uppercase bg-gold text-obsidian px-6 py-3"
          >
            Retry
          </button>
          <a href="/" className="font-mono text-[10px] tracking-[0.25em] uppercase border border-border text-silk px-6 py-3 hover:border-gold/50">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-obsidian text-silk">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
        <AIAssistantOrb />
        <CinematicCursor />
      </div>
    </QueryClientProvider>
  );
}
