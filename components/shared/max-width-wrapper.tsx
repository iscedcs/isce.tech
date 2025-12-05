import { cn } from "@/lib/utils";

export default function MaxWidthWrapper({
  className,
  children,
}: IMaxWidthWrapper) {
  return (
    <div className={cn("mx-auto max-w-8xl", className)}>
      {/* Inner constrained column that actually limits the width */}
      <div className="">
        {children}
      </div>
    </div>
  );
}
