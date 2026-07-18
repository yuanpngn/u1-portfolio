function Crown({ size = 24, color = 'currentColor', className, style }) {
  return (
    <svg
      viewBox="0 0 120 90"
      width={size}
      height={size * 0.75}
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      aria-hidden="true"
    >
      <path
        d="M13,66 C11,50 12,34 16,21 C21,30 26,38 31,44 C39,32 47,20 58,8 C63,21 69,33 76,43 C83,36 90,28 103,23 C107,36 108,51 106,66"
        fill="none"
        stroke={color}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14,68 C36,72 82,72 105,68"
        fill="none"
        stroke={color}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Crown;
