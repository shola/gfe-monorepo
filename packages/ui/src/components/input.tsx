import * as React from "react";
import { Mail, CircleHelp } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import { Label } from "@workspace/ui/components/label";
// TODO: use nanoId to generate unique ID's here

/**
 * TODO:
 * - endIcon
 * - startIcon
 * -- how to limit the types of icons? OR don't limit, and just display none if icon not found?
 * - hint
 * - validation?
 */
type InputProps = React.ComponentProps<"input"> & {
  mailIcon?: boolean;
  helpIcon?: boolean;
  hint?: string;
  label?: string;
  id: string;
};
function Input({
  className,
  type,
  mailIcon,
  helpIcon,
  hint,
  label,
  id,
  ...props
}: InputProps) {
  // icon rendering
  // if icon exists
  // add padding to the input
  // absolutely position the icon

  return (
    <div>
      {label && (
        <Label className="text-neutral-900 mb-2" htmlFor={id}>
          Email
        </Label>
      )}
      <div className="relative">
        {mailIcon && <Mail className="absolute top-2 left-2" size={20} color="#a3a3a3" />}
        <input
          id={id}
          type={type}
          data-slot="input"
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            mailIcon ? "pl-8" : "",
            className
          )}
          {...props}
        />
        {hint && <span className="text-neutral-400 block mt-1">{hint}</span>}
        {helpIcon && (
          <CircleHelp className="absolute top-2 right-2" size={20} color="#a3a3a3" />
        )}
      </div>
    </div>
  );
}

export { Input, type InputProps };
