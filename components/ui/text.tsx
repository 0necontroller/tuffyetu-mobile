import { Text, type TextProps } from "react-native";
import { cn } from "@/lib/utils";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  className?: string;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  className,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  const baseClass = {
    default: "text-base",
    defaultSemiBold: "text-base font-JakartaSemiBold",
    title: "text-3xl font-JakartaBold",
    subtitle: "text-xl font-JakartaBold",
    link: "text-[#0a7ea4] leading-7",
  }[type];

  return (
    <Text
      className={cn(baseClass, className)}
      style={[{ color }, style]}
      {...rest}
    />
  );
}
