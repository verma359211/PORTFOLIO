"use client";

import { usePathname } from "next/navigation";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import { useHydratedReducedMotion } from "./useHydratedReducedMotion";

export default function SiteBackground() {
  const pathname = usePathname();
  const reducedMotion = useHydratedReducedMotion();

  // The homepage has its own opaque surface and CSS/SVG scenery. Avoid running
  // the legacy canvas and shooting-star loops invisibly behind that surface.
  if (pathname === "/" || reducedMotion) return null;

  return (
    <>
      <ShootingStars className="fixed inset-0 -z-10 bg-cover bg-center" />
      <StarsBackground className="fixed inset-0 -z-10 bg-cover bg-center" />
    </>
  );
}
