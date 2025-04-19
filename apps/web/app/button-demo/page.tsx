import { Button } from "@workspace/ui/components/button";
import { type ButtonProps } from "@workspace/ui/components/button";
import { Star } from "lucide-react";
import "./page.css";

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

const allRows: Array<Array<ButtonProps>> = [
  primaryRow,
  secondaryRow,
  tertiaryRow,
  linkRow,
  ghostRow,
  destructiveRow,
];
export default function Page() {
  return (
    <div className="max-w-[600px] mx-auto">
      <div className="flex flex-col gap-8 justify-center justify-items-normal min-h-svh">
        {allRows.map((row, idx) => (
          <div
            key={`${row[0]?.variant}=${idx}}`}
            className="flex flex-row items-center  gap-4"
          >
            {row.map((props, idx) => (
              <Button key={`${props.variant}-${idx}`} {...props} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
