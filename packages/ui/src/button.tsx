/**
 * plan:
 * - parameterize button props into an interface
 * -- variants: primary, secondary, tertiary, destructive and links
 * -- color
 * -- size: Medium, Large, Extra large and 2 Extra large
 * -- text label (optional)
 * -- icon (optional): Left icon only, right icon only, icons on both sides,
 * or icon-only (needs ariaLabel)
 * -- click handler
 * - add normal, hover, disabled, and focus CSS states
 * - make the button tabbable
 */

/**
 *  - If you get an icon-only button, it must include an ariaLabel
   - Only a single icon can be included
*/
type Icon = {
  name: string;
} & (
  | {
      position: "left" | "right" | "both";
    }
  | {
      position: "only";
      ariaLabel: string;
    }
);

interface ButtonProps {
  variant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "destructive"
    | "link1"
    | "link2";
  size: "md" | "lg" | "xl" | "2xl";
  text?: string; // how can I specify that when icon is included, text is optional?
  icon?: Icon;
}

export default function Button(props: ButtonProps) {
  const textColor = getTextColor(props.variant);
  const backgroundColor = getBackgroundColor(props.variant);
  const textSize = `text-${props.size}`;
  const padding = `p-${props.size}`;

  const className = [textColor, backgroundColor, textSize, padding].join(' ');
  return <button className={className}>{props.text}</button>;
}

function getTextColor(variant: ButtonProps["variant"]) {
    switch (variant) {
      case "primary":
        return "text-white";
      case "secondary":
        return "text-black";
      case "tertiary":
        return "text-indigo-700";
      case "destructive":
        return "text-white";
      case "link1":
        return "text-indigo-700";
      case "link2":
        return "text-neutral-900";
      default:
        throw new Error("Unknown variant", variant);
    }
  }

  function getBackgroundColor(variant: ButtonProps["variant"]) {
    switch (variant) {
      case "primary":
        return "bg-indigo-700";
      case "secondary":
        return "bg-white";
      case "tertiary":
        return "bg-white";
      case "destructive":
        return "text-red";
      case "link1":
        return "bg-white";
      case "link2":
        return "bg-white";
      default:
        throw new Error("Unknown variant", variant);
    }
  }
