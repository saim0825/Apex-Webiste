/* eslint-disable @next/next/no-img-element */

const socialLinks = [
  ["Facebook", "https://facebook.com/ReliableBusinessBrokers", "https://img.icons8.com/ios-filled/100/FFFFFF/facebook-new.png", true],
  ["Instagram", "https://instagram.com/apexrealestateconsultants/", "https://img.icons8.com/ios-filled/100/FFFFFF/instagram-new.png", true],
  ["LinkedIn", "https://linkedin.com/in/carlos-azcarate-0911166a/", "https://cdn-icons-png.flaticon.com/512/174/174857.png", true],
  ["Pinterest", "https://pinterest.com/apexrealestateconsultants/", "https://cdn-icons-png.flaticon.com/512/174/174863.png", true],
  ["TikTok", "https://tiktok.com/@apexrealestateconsultant", "https://cdn-icons-png.flaticon.com/512/3046/3046121.png", true],
  ["X", "https://x.com/RealtorCarlosSF", "https://cdn-icons-png.flaticon.com/512/733/733579.png", true],
  ["YouTube", "https://youtube.com/@ApexRealEstateConsultantsssbrokers9372", "https://cdn-icons-png.flaticon.com/512/174/174883.png", true],
] as const;

export function SocialLinks() {
  return <div className="flex flex-wrap gap-2" aria-label="Social media links">{socialLinks.map(([label, href, icon, invert]) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:border-[var(--brand-orange)] hover:bg-[var(--brand-orange)]"><img src={icon} alt="" width="22" height="22" className={`h-[22px] w-[22px] object-contain ${invert ? "brightness-0 invert" : ""}`} /></a>)}</div>;
}

