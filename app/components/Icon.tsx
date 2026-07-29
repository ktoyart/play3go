import type { LucideIcon } from "lucide-react";

interface IconProps {
  icon: LucideIcon;
  className?: string;
  strokeWidth?: number;
  size?: number;
}

export default function Icon({
  icon: LucideIcon,
  className,
  strokeWidth = 1.5,
  size,
}: IconProps) {
  return <LucideIcon className={className} strokeWidth={strokeWidth} size={size} />;
}
