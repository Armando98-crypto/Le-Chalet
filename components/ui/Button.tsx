import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "accent";
type ButtonSize = "sm" | "md" | "lg";

interface SharedProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

interface LinkProps extends SharedProps {
  href: string;
  external?: boolean;
}

interface NativeProps extends SharedProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  href?: never;
  external?: never;
}

type ButtonProps = LinkProps | NativeProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-background hover:bg-primary/90",
  secondary: "bg-secondary text-background hover:bg-secondary/90",
  outline: "border-2 border-background/80 bg-transparent text-background hover:bg-background/10",
  accent: "bg-accent text-primary hover:bg-accent/90",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props;
    return (
      <a
        href={href}
        className={baseClasses}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={baseClasses} {...props}>
      {children}
    </button>
  );
}
