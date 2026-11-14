import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Terminal, ChevronRight } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
    >
      {/* Terminal-style Nav */}
      <header className="border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center gap-3">
              <span className="text-xs text-accent font-mono">causal-kv@error:~$</span>
              <button onClick={() => navigate("/")} className="text-sm font-mono text-foreground hover:text-accent transition-colors">
                Causal KV Cache Eviction
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 404 Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="max-w-lg mx-auto w-full">
          {/* Terminal window */}
          <div className="terminal-window">
            <div className="terminal-title-text">404 — page_not_found</div>
            <div className="flex items-center gap-1.5 px-3 pt-1.5 pb-1">
              <span className="terminal-dot red" />
              <span className="terminal-dot yellow" />
              <span className="terminal-dot green" />
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              <div className="mb-4">
                <span className="text-secondary-foreground">causal-kv:</span>
                <span className="text-accent">~</span>
                <span className="text-foreground">$ </span>
                <span className="text-foreground/80">curl /this/path</span>
              </div>

              <div className="border border-destructive/30 bg-destructive/5 p-4 mb-4">
                <div className="flex items-start gap-3">
                  <Terminal className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
                  <div>
                    <div className="text-destructive font-bold text-sm mb-1">
                      ERROR 404 — Not Found
                    </div>
                    <p className="text-xs text-secondary-foreground leading-relaxed">
                      The requested resource at this path does not exist in the
                      KV cache. The eviction policy may have removed it, or the
                      address was never allocated.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                <span>suggestion:</span>
                <span className="text-accent">return to known path?</span>
              </div>

              <Button
                onClick={() => navigate("/")}
                className="font-mono text-xs h-9 px-4 gap-2 bg-primary text-primary-foreground hover:brightness-110 border border-primary/50"
              >
                cd / && ls
                <ChevronRight className="h-3 w-3" />
              </Button>

              <div className="mt-4 flex items-center gap-1 text-muted-foreground">
                <span className="text-accent">$</span>
                <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
