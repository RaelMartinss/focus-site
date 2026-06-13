export default function Logo({ size = 38, withText = true }) {
  return (
    <div className="logo" style={{ display: "flex", alignItems: "center", gap: 11 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="6" y="44" width="34" height="6" rx="3" fill="#F47521" />
        <rect x="2" y="56" width="26" height="6" rx="3" fill="#F47521" />
        <rect x="10" y="68" width="22" height="6" rx="3" fill="#F47521" />
        <path
          d="M70 18C50.67 18 35 33.67 35 53c0 24.5 35 49 35 49s35-24.5 35-49c0-19.33-15.67-35-35-35Z"
          fill="#F47521"
        />
        <circle cx="70" cy="51" r="16" fill="#fff" />
      </svg>
      {withText && (
        <span className="logo-text">
          FOCUS
          <small>RASTREAMENTO VEICULAR</small>
        </span>
      )}
    </div>
  );
}
