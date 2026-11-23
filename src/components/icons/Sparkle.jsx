export default function Sparkle({ className = "h-6 w-6", color = "#FFC436" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 0c.6 5.6 2.4 9.4 5.4 10.6 1.8.7 3.8 1 6.6 1.4-2.8.4-4.8.7-6.6 1.4C14.4 14.6 12.6 18.4 12 24c-.6-5.6-2.4-9.4-5.4-10.6C4.8 12.7 2.8 12.4 0 12c2.8-.4 4.8-.7 6.6-1.4C9.6 9.4 11.4 5.6 12 0z"
        fill={color}
      />
    </svg>
  );
}
