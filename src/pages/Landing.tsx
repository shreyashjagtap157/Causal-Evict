import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ChevronRight, Cpu, GitBranch, Layers, Zap } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Cpu,
    title: "temporal_eviction()",
    desc: "Leverages causal attention patterns to predict which KV cache entries are least likely to be reused.",
  },
  {
    icon: Layers,
    title: "hierarchical_budget()",
    desc: "Multi-tier cache hierarchy with fine-grained memory budgets per attention head.",
  },
  {
    icon: Zap,
    title: "speculative_reload()",
    desc: "Speculatively prefetches evicted entries based on causal graph traversal patterns.",
  },
  {
    icon: GitBranch,
    title: "adaptive_policy()",
    desc: "Self-tuning eviction thresholds that adapt to runtime attention distributions.",
  },
  {
    icon: BookOpen,
    title: "benchmark_suite()",
    desc: "Comprehensive evaluation across LongBench, RULER, and needle-in-haystack tests.",
  },
  {
    icon: ArrowRight,
    title: "distributed_mode()",
    desc: "Seamless sharding across GPU clusters with minimal communication overhead.",
  },
];

const terminalCommands = [
  { prompt: "$", cmd: "git clone https://github.com/causal-kv/cache-eviction", delay: 0 },
  { prompt: "$", cmd: "cd causal-kv-eviction && make install", delay: 1.5 },
  { prompt: "$", cmd: "./bench --model llama-3.1-70b --budget 4096 --causal", delay: 3 },
];

const metrics = [
  { label: "PPL Increase", value: "< 0.3" },
  { label: "Cache Savings", value: "~65%" },
  { label: "Throughput", value: "2.4×" },
  { label: "Latency Overhead", value: "< 1.2%" },
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col relative"
    >
      {/* ─── Navigation Bar ─── */}
      <header className="border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center gap-3">
              <span className="text-xs text-accent font-mono">causal-kv@eviction:~$</span>
              <span className="text-sm font-mono text-foreground">Causal KV Cache Eviction</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-xs text-muted-foreground font-mono hidden sm:inline-block">paper · v0.3.2</span>
              <span className="text-xs text-muted-foreground font-mono hidden sm:inline-block">|</span>
              <button
                onClick={() => navigate("/auth")}
                className="text-xs font-mono text-foreground hover:text-accent transition-colors"
              >
                login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Hero Section ─── */}
      <section className="border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto">
            {/* Terminal Window */}
            <div className="terminal-window mb-12">
              <div className="terminal-title-text">causal-eviction — -bash — 80×24</div>
              <div className="flex items-center gap-1.5 px-3 pt-1.5 pb-1">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
              </div>
              <div className="p-5 sm:p-8 pt-4 font-mono text-sm leading-relaxed">
                <div className="terminal-fade-in" style={{ animationDelay: "0.2s" }}>
                  <span className="text-secondary-foreground">causal-kv:</span>
                  <span className="text-accent">~</span>
                  <span className="text-foreground">$ </span>
                  <span className="text-foreground/80">cat README.md | head -6</span>
                </div>

                <div className="mt-2 space-y-1 terminal-fade-in" style={{ animationDelay: "0.7s" }}>
                  <pre className="text-foreground">
                    <span className="text-amber-400/80"># Causal KV Cache Eviction</span>
                  </pre>
                  <pre className="text-foreground/90">
                    <span className="text-green-400/90"># </span>Efficient key-value cache management for
                  </pre>
                  <pre className="text-foreground/90">
                    <span className="text-green-400/90"># </span>transformer inference using causal attention
                  </pre>
                  <pre className="text-foreground/90">
                    <span className="text-green-400/90"># </span>patterns to guide eviction decisions.
                  </pre>
                </div>

                <div className="mt-4 terminal-fade-in" style={{ animationDelay: "1.4s" }}>
                  <span className="text-secondary-foreground">causal-kv:</span>
                  <span className="text-accent">~</span>
                  <span className="text-foreground">$ </span>
                  <span className="text-foreground/80">./run --bench longbench --show-results</span>
                </div>

                <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-4 terminal-fade-in" style={{ animationDelay: "2s" }}>
                  {metrics.map((m) => (
                    <div key={m.label} className="border border-border/30 p-2 text-center">
                      <div className="text-lg sm:text-xl font-bold text-primary terminal-glow">{m.value}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-2 text-muted-foreground terminal-fade-in" style={{ animationDelay: "2.6s" }}>
                  <span className="animate-pulse text-primary">●</span>
                  <span className="text-[11px]">System ready — throughput optimized at 2.4× baseline</span>
                </div>
              </div>
            </div>

            {/* Headline */}
            <div className="text-center mb-8 terminal-fade-in" style={{ animationDelay: "3s" }}>
              <h1 className="text-3xl sm:text-5xl font-bold font-retro tracking-tight mb-4 terminal-glow">
                Causal KV Cache Eviction
              </h1>
              <p className="text-sm sm:text-base text-secondary-foreground font-mono max-w-2xl mx-auto leading-relaxed">
                Drop-in eviction policies for transformer inference that leverage
                <br className="hidden sm:block" />
                causal attention structure to reduce memory <span className="text-accent">without</span> degrading quality.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 terminal-fade-in" style={{ animationDelay: "3.5s" }}>
              <Button
                onClick={() => navigate("/auth")}
                className="font-mono text-xs h-9 px-5 gap-2 bg-primary text-primary-foreground hover:brightness-110 border border-primary/50"
              >
                <span className="text-primary-foreground">$</span>
                get_started --demo
                <ChevronRight className="h-3 w-3" />
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-mono text-xs h-9 px-5 gap-2 border-border/50 hover:bg-secondary"
              >
                read_docs --section=features
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Terminal Commands Demo ─── */}
      <section className="border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs text-muted-foreground font-mono mb-6">
              <span className="text-accent">//</span> quick_start.sh
            </div>
            <div className="terminal-window">
              <div className="terminal-title-text">quick_start.sh — bash</div>
              <div className="flex items-center gap-1.5 px-3 pt-1.5 pb-1">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
              </div>
              <div className="p-5 font-mono text-sm leading-relaxed">
                {terminalCommands.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.8, duration: 0.3 }}
                    className="mb-1"
                  >
                    <span className="text-accent">{line.prompt}</span>{" "}
                    <span className="text-foreground/80">{line.cmd}</span>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 4.5, duration: 0.3 }}
                  className="mt-3 text-green-400/80 flex items-center gap-2"
                >
                  <span>✓ Build complete. 3 warnings (causal heuristic tuning).</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 5.2, duration: 0.3 }}
                  className="flex items-center gap-1 mt-1"
                >
                  <span className="text-accent">$</span>
                  <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features Section ─── */}
      <section id="features" className="border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <div className="text-xs text-muted-foreground font-mono mb-2">
                <span className="text-accent">//</span> available_modules
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-mono terminal-glow">
                core_features()
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.3 }}
                  className="border border-border/30 p-4 hover:border-primary/40 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <feature.icon className="h-4 w-4 text-primary mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
                    <div>
                      <div className="text-sm font-mono text-foreground mb-1">
                        <span className="text-accent/70 group-hover:text-accent transition-colors">fn </span>
                        {feature.title}
                      </div>
                      <p className="text-xs text-secondary-foreground font-mono leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Architecture / Paper Section ─── */}
      <section className="border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs text-muted-foreground font-mono mb-6">
              <span className="text-accent">//</span> architecture_overview
            </div>
            <div className="terminal-window">
              <div className="terminal-title-text">ARCHITECTURE.md</div>
              <div className="flex items-center gap-1.5 px-3 pt-1.5 pb-1">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
              </div>
              <div className="p-5 font-mono text-sm leading-relaxed">
                <pre className="text-xs sm:text-sm leading-relaxed text-foreground/80 overflow-x-auto">
                  <span className="text-muted-foreground">┌─────────────────────────────────────────────────────────┐</span>
                  <br />
                  <span className="text-muted-foreground">│</span>  <span className="text-primary font-bold">Causal KV Cache — Architecture</span>        <span className="text-muted-foreground">│</span>
                  <br />
                  <span className="text-muted-foreground">│</span>                                                       <span className="text-muted-foreground">│</span>
                  <br />
                  <span className="text-muted-foreground">│</span>  Input → [Attn Mask] → [Score Cache] → [Evict Policy]  <span className="text-muted-foreground">│</span>
                  <br />
                  <span className="text-muted-foreground">│</span>                          ↓                            <span className="text-muted-foreground">│</span>
                  <br />
                  <span className="text-muted-foreground">│</span>                   [Causal Graph]                      <span className="text-muted-foreground">│</span>
                  <br />
                  <span className="text-muted-foreground">│</span>                          ↓                            <span className="text-muted-foreground">│</span>
                  <br />
                  <span className="text-muted-foreground">│</span>  [Token ↦ Priority Queue] → [Budget Allocator]       <span className="text-muted-foreground">│</span>
                  <br />
                  <span className="text-muted-foreground">│</span>                          ↓                            <span className="text-muted-foreground">│</span>
                  <br />
                  <span className="text-muted-foreground">│</span>  [Eviction Decision] → [Cache Update] → [Output]     <span className="text-muted-foreground">│</span>
                  <br />
                  <span className="text-muted-foreground">└─────────────────────────────────────────────────────────┘</span>
                </pre>

                <hr className="my-4 border-border/30" />

                <div className="grid sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-accent mb-1">## Key Insight</div>
                    <p className="text-secondary-foreground">
                      Unlike LRU or random eviction, causal eviction uses the attention
                      causal mask to score token importance — tokens with fewer future
                      references are evicted first.
                    </p>
                  </div>
                  <div>
                    <div className="text-accent mb-1">## Citation</div>
                    <p className="text-secondary-foreground">
                      <span className="text-muted-foreground">@article{'{'}causal_kv_2025,</span>
                      <br />
                      <span className="text-muted-foreground">  title={'{'}Causal KV Cache Eviction for Efficient LLM Inference{'}'},</span>
                      <br />
                      <span className="text-muted-foreground">  year={'{'}2025{'}'}</span>
                      <br />
                      <span className="text-muted-foreground">{'}'}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer CTA ─── */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-xs text-muted-foreground font-mono mb-3">
              <span className="text-accent">$</span> <span className="animate-pulse">_</span>
            </div>
            <p className="text-sm font-mono text-secondary-foreground mb-6">
              Ready to reduce your KV cache overhead?
            </p>
            <Button
              onClick={() => navigate("/auth")}
              className="font-mono text-xs h-9 px-5 gap-2 bg-primary text-primary-foreground hover:brightness-110 border border-primary/50"
            >
              deploy --causal --budget 4096
              <ChevronRight className="h-3 w-3" />
            </Button>
            <p className="text-[10px] text-muted-foreground font-mono mt-6">
              causal-kv-eviction v0.3.2 · MIT License · Built with Rust + CUDA
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
