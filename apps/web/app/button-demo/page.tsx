import { Button } from "@workspace/ui/components/button";
import { type ButtonProps } from "@workspace/ui/components/button";
import { Star } from "lucide-react";

const primaryRow: ButtonProps[] = [
  {
    variant: "default",
    size: "sm",
    children: "Button CTA",
  },
  {
    variant: "default",
    size: "default",
    children: (
      <>
        <Star />
        Button CTA
      </>
    ),
  },
  {
    variant: "default",
    size: "lg",
    children: (
      <>
        Button CTA
        <Star />
      </>
    ),
  },
  {
    variant: "default",
    size: "xl",
    children: "Button CTA",
  },
  {
    variant: "default",
    size: "icon",
    children: <Star />,
  },
];

const secondaryRow: ButtonProps[] = [
  {
    variant: "secondary",
    size: "sm",
    children: "Button CTA",
  },
  {
    variant: "secondary",
    size: "default",
    children: (
      <>
        <Star />
        Button CTA
      </>
    ),
  },
  {
    variant: "secondary",
    size: "lg",
    children: (
      <>
        Button CTA
        <Star />
      </>
    ),
  },
  {
    variant: "secondary",
    size: "xl",
    children: "Button CTA",
  },
  {
    variant: "secondary",
    size: "icon",
    children: <Star />,
  },
];

const tertiaryRow: ButtonProps[] = [
  {
    variant: "tertiary",
    size: "sm",
    children: "Button CTA",
  },
  {
    variant: "tertiary",
    size: "default",
    children: (
      <>
        <Star />
        Button CTA
      </>
    ),
  },
  {
    variant: "tertiary",
    size: "lg",
    children: (
      <>
        Button CTA
        <Star />
      </>
    ),
  },
  {
    variant: "tertiary",
    size: "xl",
    children: "Button CTA",
  },
  {
    variant: "tertiary",
    size: "icon",
    children: <Star />,
  },
];

const linkRow: ButtonProps[] = [
  {
    variant: "link",
    size: "sm",
    children: "Button CTA",
  },
  {
    variant: "link",
    size: "default",
    children: (
      <>
        <Star />
        Button CTA
      </>
    ),
  },
  {
    variant: "link",
    size: "lg",
    children: (
      <>
        Button CTA
        <Star />
      </>
    ),
  },
  {
    variant: "link",
    size: "xl",
    children: "Button CTA",
  },
  {
    variant: "link",
    size: "icon",
    children: <Star />,
  },
];

const ghostRow: ButtonProps[] = [
  {
    variant: "ghost",
    size: "sm",
    children: "Button CTA",
  },
  {
    variant: "ghost",
    size: "default",
    children: (
      <>
        <Star />
        Button CTA
      </>
    ),
  },
  {
    variant: "ghost",
    size: "lg",
    children: (
      <>
        Button CTA
        <Star />
      </>
    ),
  },
  {
    variant: "ghost",
    size: "xl",
    children: "Button CTA",
  },
  {
    variant: "ghost",
    size: "icon",
    children: <Star />,
  },
];

const destructiveRow: ButtonProps[] = [
  {
    variant: "destructive",
    size: "sm",
    children: "Button CTA",
  },
  {
    variant: "destructive",
    size: "default",
    children: (
      <>
        <Star />
        Button CTA
      </>
    ),
  },
  {
    variant: "destructive",
    size: "lg",
    children: (
      <>
        Button CTA
        <Star />
      </>
    ),
  },
  {
    variant: "destructive",
    size: "xl",
    children: "Button CTA",
  },
  {
    variant: "destructive",
    size: "icon",
    children: <Star />,
  },
];

export default function Page() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-svh bg-white">
      <div className="flex flex-row items-center justify-center gap-4">
        {primaryRow.map((props, idx) => (
          <Button key={`${props.variant}-${idx}`} {...props} />
        ))}
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        {secondaryRow.map((props, idx) => (
          <Button key={`${props.variant}-${idx}`} {...props} />
        ))}
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        {tertiaryRow.map((props, idx) => (
          <Button key={`${props.variant}-${idx}`} {...props} />
        ))}
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        {linkRow.map((props, idx) => (
          <Button key={`${props.variant}-${idx}`} {...props} />
        ))}
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        {ghostRow.map((props, idx) => (
          <Button key={`${props.variant}-${idx}`} {...props} />
        ))}
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        {destructiveRow.map((props, idx) => (
          <Button key={`${props.variant}-${idx}`} {...props} />
        ))}
      </div>
    </div>
  );
}
