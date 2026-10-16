"use client";

import MobileMenu from "./MobileMenu";

export default function NavbarClient({
  items,
  socialItems,
  displaySocials,
  displayItemNumbering,
  menuButtonColor,
  openMenuButtonColor,
  changeMenuColorOnOpen,
  colors,
  accentColor,
}) {
  return (
    <MobileMenu
      position="right"
      items={items}
      socialItems={socialItems}
      displaySocials={displaySocials}
      displayItemNumbering={displayItemNumbering}
      menuButtonColor={menuButtonColor}
      openMenuButtonColor={openMenuButtonColor}
      changeMenuColorOnOpen={changeMenuColorOnOpen}
      colors={colors}
      accentColor={accentColor}
    />
  );
}
