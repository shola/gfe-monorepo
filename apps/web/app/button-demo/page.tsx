// import Button from "@repo/ui/button";
// import { type ButtonProps } from "@repo/ui/button";

// export default function ButtonDemoPage() {
//   const primaryRow: ButtonProps[] = [
//     {
//       variant: "primary",
//       size: "base",
//       text: "Button CTA",
//     },
//     {
//       variant: "primary",
//       size: "lg",
//       text: "Button CTA",
//     },
//     {
//       variant: "primary",
//       size: "xl",
//       text: "Button CTA",
//     },
//     {
//       variant: "primary",
//       size: "2xl",
//       text: "Button CTA",
//     },
//     {
//       variant: "primary",
//       size: "2xl",
//       icon: {
//         position: "only",
//         ariaLabel: "Favorite item button",
//         name: "star",
//       },
//     },
//   ];
//   const props: ButtonProps = {
//     variant: "primary",
//     size: "xl",
//     text: "Button CTA",
//   };
//   return (
//     <div className="flex justify-center flex-row gap-4">
//       {primaryRow.map((props, idx) => (
//         <Button key={`${props.variant}-${idx}`} {...props} />
//       ))}
//     </div>
//   );
//   return <Button {...props}></Button>;
// }
