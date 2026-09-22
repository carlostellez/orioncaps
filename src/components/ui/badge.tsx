import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Nota de marca: el dorado no se usa como color de texto en tamaños
// pequeños (regla WCAG de la paleta Orion Caps) — aquí actúa solo
// como acento decorativo en borde/fondo, el texto va en el color de
// primer plano del tema activo.
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-foreground",
  {
    variants: {
      variant: {
        default: "border-gold-500/40 bg-gold-500/10",
        outline: "border-border text-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
