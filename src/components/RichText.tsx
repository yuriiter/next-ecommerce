import { PropsWithClassName } from "@/types/utils";
import { cn } from "@/utils";
import Markdown from "react-markdown";
import gfm from "remark-gfm";

type RichTextProps = { children: string } & PropsWithClassName;

export const RichText = ({ children, className }: RichTextProps) => {
  return (
    <div className={cn(["rich-text", className])}>
      <Markdown remarkPlugins={[gfm]}>{children}</Markdown>
    </div>
  );
};
