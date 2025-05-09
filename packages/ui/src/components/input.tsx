"use client";

import {
  type ComponentProps,
  type HTMLInputTypeAttribute,
  type ChangeEventHandler,
  useState,
} from "react";
import { Mail, CircleHelp } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import { Label } from "@workspace/ui/components/label";
import { z } from "zod";
// TODO: use nanoId to generate unique ID's here
// TODO: fix TS errors
type InputProps = ComponentProps<"input"> & {
  mailIcon?: boolean;
  helpIcon?: boolean;
  hint?: string;
  label?: string;
  id: string;
  errorMsg?: string;
  validatorFn?: () => typeof z.ZodString;
  enableValidation?: boolean;
};

function createZodValidator(
  type?: HTMLInputTypeAttribute,
  enableValidation?: boolean,
  errorMsg?: string
) {
  if (type !== "email" || !enableValidation) {
    return null;
  }

  return z.string().email({ message: errorMsg || "Invalid email address" });
}
function Input({
  className,
  type,
  mailIcon,
  helpIcon,
  hint,
  label,
  id,
  enableValidation,
  errorMsg,
  validatorFn,
  ...props
}: InputProps) {
  const [val, setVal] = useState("");
  const [error, setError] = useState("");
  const validator = createZodValidator(type, enableValidation, errorMsg);

  const handleValChange: ChangeEventHandler = (e) => {
    const { value } = e.target;
    setVal(value);

    if (!validator) return;

    try {
      validator.parse(value);
      setError("");
    } catch (err) {
      // setError("test");
      if (err instanceof z.ZodError && err.errors && err.errors[0]) {
        setError(errorMsg || err.errors[0].message);
      }
    }
  };
  return (
    <div>
      {label && (
        <Label className="text-neutral-900 mb-2" htmlFor={id}>
          Email
        </Label>
      )}
      <div className="relative">
        {mailIcon && (
          <Mail className="absolute top-2 left-2" size={20} color="#a3a3a3" />
        )}
        <input
          id={id}
          type={type}
          data-slot="input"
          value={val}
          onChange={handleValChange}
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            mailIcon ? "pl-8" : "",
            helpIcon ? "pr-8" : "",
            className
          )}
          {...props}
        />
        {hint && <span className="text-neutral-400 block mt-1">{hint}</span>}
        {helpIcon && (
          <CircleHelp
            className="absolute top-2 right-2"
            size={20}
            color="#a3a3a3"
          />
        )}
        {error && <span className="text-red-600">{error}</span>}
      </div>
    </div>
  );
}

export { Input, type InputProps };
