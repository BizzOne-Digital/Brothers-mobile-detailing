/* SVG icon set — 24px stroke icons + a few filled brand icons */
const STROKE = {
  calendar: '<rect x="3" y="4.5" width="18" height="16.5" rx="2.5"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4M7.5 13h2M11 13h2M14.5 13h2M7.5 16.5h2M11 16.5h2"/>',
  phone: '<path d="M5 3.5h3.2l1.6 4.2-2.1 1.5a12 12 0 0 0 7.1 7.1l1.5-2.1 4.2 1.6V19a2 2 0 0 1-2.2 2A17 17 0 0 1 3 5.7 2 2 0 0 1 5 3.5z"/>',
  mail: '<rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3 6.5 9 6.5 9-6.5"/>',
  globe: '<circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5c2.6 2.8 3.9 6 3.9 9.5s-1.3 6.7-3.9 9.5c-2.6-2.8-3.9-6-3.9-9.5S9.4 5.3 12 2.5z"/>',
  arrow: '<path d="M4 12h16M14 6l6 6-6 6"/>',
  arrowLeft: '<path d="M20 12H4M10 6l-6 6 6 6"/>',
  chevron: '<path d="m9 6 6 6-6 6"/>',
  home: '<path d="M3 11 12 3.5 21 11"/><path d="M5.5 9v11.5h13V9"/><path d="M10 20.5v-6h4v6"/>',
  shield: '<path d="M12 2.5 20 5.5v6c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10v-6z"/><path d="m8.3 12 2.6 2.6 5-5"/>',
  clock: '<circle cx="12" cy="12" r="9.5"/><path d="M12 6.5V12l3.8 2.3"/>',
  pin: '<path d="M12 21.5s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9.5" r="2.6"/>',
  sparkle: '<path d="M10 3.5 11.8 9 17 11l-5.2 2-1.8 5.5L8.2 13 3 11l5.2-2z"/><path d="m18 3 .8 2.2L21 6l-2.2.8L18 9l-.8-2.2L15 6l2.2-.8zM18 15.5l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6z"/>',
  car: '<path d="M3.5 16.5v-4l2-5a2 2 0 0 1 1.9-1.3h9.2a2 2 0 0 1 1.9 1.3l2 5v4z"/><path d="M3.5 12.5h17M3.5 16.5v2.5h3v-2.5M17.5 16.5v2.5h3v-2.5"/><circle cx="7.5" cy="14.5" r=".6"/><circle cx="16.5" cy="14.5" r=".6"/>',
  layers: '<path d="m12 3 9.5 5-9.5 5-9.5-5z"/><path d="m2.5 12.5 9.5 5 9.5-5"/><path d="m2.5 16.5 9.5 5 9.5-5"/>',
  seat: '<path d="M9 3h3.5a1.5 1.5 0 0 1 1.5 1.7L13 12h-3.5L7.6 4.8A1.5 1.5 0 0 1 9 3z"/><path d="M8 12h8.5a1.5 1.5 0 0 1 1.5 1.5V16H6.5l.3-2.6A1.5 1.5 0 0 1 8 12zM8 16v5M16 16v5"/>',
  drops: '<path d="M8 3.5S3.5 9 3.5 12.2a4.5 4.5 0 0 0 9 0C12.5 9 8 3.5 8 3.5z"/><path d="M16.5 8.5s-4 4.6-4 7.4a4 4 0 0 0 8 0c0-2.8-4-7.4-4-7.4z"/>',
  polisher: '<circle cx="12" cy="16" r="5.5"/><circle cx="12" cy="16" r="2"/><path d="M12 10.5V6.5M8 6.5h8l1.5-3h-11z"/>',
  wheel: '<circle cx="12" cy="12" r="9.5"/><circle cx="12" cy="12" r="3"/><path d="M12 2.5V9M12 15v6.5M2.5 12H9M15 12h6.5M5.3 5.3 9.9 9.9M14.1 14.1l4.6 4.6M18.7 5.3l-4.6 4.6M9.9 14.1l-4.6 4.6"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="m8.5 13.8-1.5 7.7 5-2.7 5 2.7-1.5-7.7"/><path d="m9.7 9 1.6 1.6L14.5 7.5"/>',
  bottle: '<path d="M9.5 2.5h5v3l2 3v12a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-12l2-3z"/><path d="M7.5 12h9M7.5 17h9"/>',
  thumb: '<path d="M7 10.5v10H3.5v-10zM7 10.5l4-8a2.5 2.5 0 0 1 2.5 2.8L13 9.5h5.7a2 2 0 0 1 2 2.4l-1.5 7a2 2 0 0 1-2 1.6H7"/>',
  check: '<path d="M5 12.5 10 17.5 19.5 7"/>',
  checkCircle: '<circle cx="12" cy="12" r="9.5"/><path d="m7.8 12.2 2.9 2.9 5.5-5.6"/>',
  alert: '<circle cx="12" cy="12" r="9.5"/><path d="M12 7.5v5.5M12 16.5v.1"/>',
  info: '<circle cx="12" cy="12" r="9.5"/><path d="M12 11v5.5M12 7.5v.1"/>',
  menu: '<path d="M3.5 6.5h17M3.5 12h17M9.5 17.5h11"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  zoom: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5M10.5 8v5M8 10.5h5"/>',
  drag: '<path d="M9 7 4 12l5 5M15 7l5 5-5 5"/>',
  truck: '<path d="M2.5 6.5h11v10h-11zM13.5 10h4.5l3.5 3.5v3h-8"/><circle cx="6.5" cy="17.5" r="2"/><circle cx="17.5" cy="17.5" r="2"/>',
  suv: '<path d="M2.5 16.5V11l2.5-4.5h11l3.5 4.5h2v5.5z"/><path d="M2.5 11h19M10.5 6.5V11"/><circle cx="7" cy="16.5" r="2"/><circle cx="17" cy="16.5" r="2"/>',
  tag: '<path d="M3 12V3.5h8.5l9.5 9.5-8.5 8.5z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
  grid: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>',
  split: '<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M12 4v16M7 9l-2 3 2 3M17 9l2 3-2 3"/>',
  quote: '<path d="M10 7H6a3 3 0 0 0-3 3v4h5v-3.5H5.5M21 7h-4a3 3 0 0 0-3 3v4h5v-3.5h-2.5"/>',
  send: '<path d="M21.5 2.5 10.5 13.5M21.5 2.5l-7 19-4-8-8-4z"/>',
  droplet: '<path d="M12 2.8s-6.5 7.3-6.5 11.7a6.5 6.5 0 0 0 13 0C18.5 10.1 12 2.8 12 2.8z"/><path d="M9 15a3 3 0 0 0 3 3"/>',
  wind: '<path d="M3 8.5h11a3 3 0 1 0-3-3M3 12.5h16a2.5 2.5 0 1 1-2.5 2.5M3 16.5h8a2.5 2.5 0 1 1-2.5 2.5"/>',
  bolt: '<path d="M13.5 2.5 4.5 13.5h6.5l-1 8 9-11h-6.5z"/>',
};
const FILLED = {
  instagram: '<path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-2.3.1-3.4 1.2-3.5 3.5C3.7 8.8 3.7 9.2 3.7 12s0 3.2.1 4.4c.1 2.3 1.2 3.4 3.5 3.5 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c2.3-.1 3.4-1.2 3.5-3.5.1-1.2.1-1.6.1-4.4s0-3.2-.1-4.4c-.1-2.3-1.2-3.4-3.5-3.5C15.5 4 15.1 4 12 4zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 8a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2zm5.1-9.4a1.1 1.1 0 1 1 0 2.3 1.1 1.1 0 0 1 0-2.3z"/>',
  facebook: '<path d="M13.5 21.8v-8h2.7l.4-3.2h-3.1v-2c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.4v3.2h2.7v8z"/>',
  star: '<path d="m12 2.8 2.8 5.8 6.4.9-4.6 4.5 1.1 6.3L12 17.3l-5.7 3 1.1-6.3-4.6-4.5 6.4-.9z"/>',
};

export type IconName = keyof typeof STROKE | keyof typeof FILLED;

export default function Icon({ name, className }: { name: IconName; className?: string }) {
  if (name in FILLED) {
    return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: FILLED[name as keyof typeof FILLED] }} />;
  }
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    dangerouslySetInnerHTML={{ __html: STROKE[name as keyof typeof STROKE] }} />;
}
