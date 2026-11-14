import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { useAuth } from "@/hooks/use-auth";
import { ArrowRight, Loader2, Mail, Terminal, UserX } from "lucide-react";
import { Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface AuthProps {
  redirectAfterAuth?: string;
}

function Auth({ redirectAfterAuth }: AuthProps = {}) {
  const { isLoading: authLoading, isAuthenticated, signIn } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState<"signIn" | { email: string }>("signIn");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && isAuthenticated) {
      const redirect = redirectAfterAuth || "/";
      navigate(redirect);
    }
  }, [authLoading, isAuthenticated, navigate, redirectAfterAuth]);

  const handleEmailSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const formData = new FormData(event.currentTarget);
      await signIn("email-otp", formData);
      setStep({ email: formData.get("email") as string });
      setIsLoading(false);
    } catch (error) {
      console.error("Email sign-in error:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to send verification code. Please try again.",
      );
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const formData = new FormData(event.currentTarget);
      await signIn("email-otp", formData);

      const redirect = redirectAfterAuth || "/";
      navigate(redirect);
    } catch (error) {
      console.error("OTP verification error:", error);
      setError("The verification code you entered is incorrect.");
      setIsLoading(false);
      setOtp("");
    }
  };

  const handleGuestLogin = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await signIn("anonymous");
      const redirect = redirectAfterAuth || "/";
      navigate(redirect);
    } catch (error) {
      console.error("Guest login error:", error);
      setError(`Failed to sign in as guest: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Terminal-style Nav */}
      <header className="border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center gap-3">
              <span className="text-xs text-accent font-mono">causal-kv@auth:~$</span>
              <button onClick={() => navigate("/")} className="text-sm font-mono text-foreground hover:text-accent transition-colors">
                Causal KV Cache Eviction
              </button>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-xs text-muted-foreground font-mono">session: new</span>
            </div>
          </div>
        </div>
      </header>

      {/* Auth Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="flex items-center justify-center h-full flex-col w-full max-w-sm">
          <Card className="w-full border border-border/50 bg-card/80 backdrop-blur-sm">
            {step === "signIn" ? (
              <>
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-3">
                    <div
                      className="w-12 h-12 border border-border/50 flex items-center justify-center cursor-pointer hover:border-primary/50 transition-colors"
                      onClick={() => navigate("/")}
                    >
                      <Terminal className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-mono terminal-glow">authenticate()</CardTitle>
                  <CardDescription className="font-mono text-xs text-muted-foreground">
                    <span className="text-accent">$</span> Enter your email to log in or sign up
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleEmailSubmit}>
                  <CardContent className="space-y-4">
                    <div className="relative flex items-center gap-2">
                      <div className="relative flex-1">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                        <Input
                          name="email"
                          placeholder="name@example.com"
                          type="email"
                          className="pl-9 font-mono text-xs h-9 border-border/40 focus:border-primary/50"
                          disabled={isLoading}
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        variant="outline"
                        size="icon"
                        disabled={isLoading}
                        className="h-9 w-9 border-border/40"
                      >
                        {isLoading ? (
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        ) : (
                          <ArrowRight className="h-3.5 w-3.5" />
                        )}
                      </Button>
                    </div>
                    {error && (
                      <p className="text-xs text-destructive font-mono">
                        <span className="text-destructive">✗</span> {error}
                      </p>
                    )}

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-border/30" />
                      </div>
                      <div className="relative flex justify-center text-[10px] uppercase font-mono">
                        <span className="bg-card px-2 text-muted-foreground">
                          --or--
                        </span>
                      </div>
                    </div>

                    <Button
                      type="button"
                      variant="outline"
                      className="w-full font-mono text-xs h-9 gap-2 border-border/40"
                      onClick={handleGuestLogin}
                      disabled={isLoading}
                    >
                      <UserX className="h-3.5 w-3.5" />
                      continue --guest
                    </Button>
                  </CardContent>
                </form>
              </>
            ) : (
              <>
                <CardHeader className="text-center pt-6 pb-4">
                  <CardTitle className="text-lg font-mono terminal-glow">verify_otp()</CardTitle>
                  <CardDescription className="font-mono text-xs text-muted-foreground">
                    Code sent to{' '}
                    <span className="text-accent">{step.email}</span>
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleOtpSubmit}>
                  <CardContent className="pb-4">
                    <input type="hidden" name="email" value={step.email} />
                    <input type="hidden" name="code" value={otp} />

                    <div className="flex justify-center">
                      <InputOTP
                        value={otp}
                        onChange={setOtp}
                        maxLength={6}
                        disabled={isLoading}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && otp.length === 6 && !isLoading) {
                            const form = (e.target as HTMLElement).closest("form");
                            if (form) form.requestSubmit();
                          }
                        }}
                      >
                        <InputOTPGroup className="gap-1">
                          {Array.from({ length: 6 }).map((_, index) => (
                            <InputOTPSlot
                              key={index}
                              index={index}
                              className="font-mono border-border/40 text-foreground text-sm h-10 w-9 first:rounded-none last:rounded-none"
                            />
                          ))}
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                    {error && (
                      <p className="mt-2 text-xs text-destructive text-center font-mono">
                        <span className="text-destructive">✗</span> {error}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground text-center mt-4 font-mono">
                      Didn't receive a code?{' '}
                      <Button
                        variant="link"
                        className="p-0 h-auto font-mono text-xs text-accent"
                        onClick={() => setStep("signIn")}
                      >
                        retry
                      </Button>
                    </p>
                  </CardContent>
                  <CardFooter className="flex-col gap-2 pt-0">
                    <Button
                      type="submit"
                      className="w-full font-mono text-xs h-9 gap-2 bg-primary text-primary-foreground border border-primary/30"
                      disabled={isLoading || otp.length !== 6}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          verifying...
                        </>
                      ) : (
                        <>
                          $ verify --code {otp}
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => setStep("signIn")}
                      disabled={isLoading}
                      className="w-full font-mono text-xs h-8 text-muted-foreground hover:text-foreground"
                    >
                      ← use different email
                    </Button>
                  </CardFooter>
                </form>
              </>
            )}

            <div className="py-3 px-5 text-[10px] text-center text-muted-foreground border-t border-border/30 font-mono">
              <span className="text-muted-foreground/60">// </span>
              secured by{' '}
              <a
                href="https://freebuff.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary transition-colors"
              >
                freebuff.com
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function AuthPage(props: AuthProps) {
  return (
    <Suspense>
      <Auth {...props} />
    </Suspense>
  );
}
