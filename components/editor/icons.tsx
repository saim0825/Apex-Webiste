type IconProps = { className?: string };

export function PanelLeftOpen({ className = "" }: IconProps) { return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M14 9l3 3-3 3"/></svg>; }
export function PanelLeftClose({ className = "" }: IconProps) { return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M17 9l-3 3 3 3"/></svg>; }
export function Plus({ className = "" }: IconProps) { return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>; }
export function X({ className = "" }: IconProps) { return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>; }
