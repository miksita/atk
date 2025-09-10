"use client"
import LanguageSwitcher from "./LanguageSwitcher";
import LogoHeader from "./LogoHeader";

export default function Header() {
  return (
    <header className="conteiner-custom py-10 md:pb-14">
      <div className="hidden md:flex items-start justify-between">
        {/* <LogoHeader animate={true} /> */}
        <div></div>
        <LanguageSwitcher />
      </div>

      <div className="md:hidden flex flex-col items-start space-y-10">
        <LanguageSwitcher />
        {/* <LogoHeader width={200} height={50} animate={true} /> */}
        <div></div>
      </div>
    </header>
  );
}