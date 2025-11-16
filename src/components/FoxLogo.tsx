interface FoxLogoProps {
  variant?: 'full' | 'icon' | 'horizontal';
  size?: number;
  className?: string;
}

const FoxLogo = ({ variant = 'full', size = 120, className = '' }: FoxLogoProps) => {
  if (variant === 'icon') {
    return (
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 200 200" 
        className={className}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M100 40 L120 20 C125 15 130 15 133 20 L140 35 C142 40 140 45 135 47 L120 55 Z" 
          fill="#FFB89A" 
          stroke="#FF8C5A" 
          strokeWidth="2"
        />
        <path 
          d="M100 40 L80 20 C75 15 70 15 67 20 L60 35 C58 40 60 45 65 47 L80 55 Z" 
          fill="#FFB89A" 
          stroke="#FF8C5A" 
          strokeWidth="2"
        />
        <circle cx="100" cy="80" r="45" fill="#FFDAB9" stroke="#FF8C5A" strokeWidth="3"/>
        <ellipse cx="85" cy="75" rx="6" ry="10" fill="#2D2D2D"/>
        <ellipse cx="115" cy="75" rx="6" ry="10" fill="#2D2D2D"/>
        <path 
          d="M100 85 Q95 90 90 88" 
          stroke="#2D2D2D" 
          strokeWidth="2" 
          strokeLinecap="round" 
          fill="none"
        />
        <path 
          d="M100 85 Q105 90 110 88" 
          stroke="#2D2D2D" 
          strokeWidth="2" 
          strokeLinecap="round" 
          fill="none"
        />
        <circle cx="100" cy="85" r="3" fill="#2D2D2D"/>
        <path 
          d="M100 125 Q80 145 60 160 Q50 167 45 175 Q40 185 50 195 Q60 200 70 190 Q75 185 80 175 L100 140 Z" 
          fill="url(#tailGradient)" 
          stroke="#FF8C5A" 
          strokeWidth="3"
        />
        <path 
          d="M100 140 Q110 155 120 165 Q130 175 135 180 Q142 188 138 195" 
          stroke="#FFF5E6" 
          strokeWidth="2" 
          strokeLinecap="round" 
          fill="none"
          opacity="0.6"
        />
        <defs>
          <linearGradient id="tailGradient" x1="50" y1="125" x2="100" y2="195">
            <stop offset="0%" stopColor="#FFB89A"/>
            <stop offset="50%" stopColor="#FF8C5A"/>
            <stop offset="100%" stopColor="#FFDAB9"/>
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (variant === 'horizontal') {
    return (
      <svg 
        width={size * 2.5} 
        height={size} 
        viewBox="0 0 500 200" 
        className={className}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M100 40 L120 20 C125 15 130 15 133 20 L140 35 C142 40 140 45 135 47 L120 55 Z" 
          fill="#FFB89A" 
          stroke="#FF8C5A" 
          strokeWidth="2"
        />
        <path 
          d="M100 40 L80 20 C75 15 70 15 67 20 L60 35 C58 40 60 45 65 47 L80 55 Z" 
          fill="#FFB89A" 
          stroke="#FF8C5A" 
          strokeWidth="2"
        />
        <circle cx="100" cy="80" r="45" fill="#FFDAB9" stroke="#FF8C5A" strokeWidth="3"/>
        <ellipse cx="85" cy="75" rx="6" ry="10" fill="#2D2D2D"/>
        <ellipse cx="115" cy="75" rx="6" ry="10" fill="#2D2D2D"/>
        <path d="M100 85 Q95 90 90 88" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M100 85 Q105 90 110 88" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <circle cx="100" cy="85" r="3" fill="#2D2D2D"/>
        <path 
          d="M100 125 Q80 145 60 160 Q50 167 45 175 Q40 185 50 195 Q60 200 70 190 Q75 185 80 175 L100 140 Z" 
          fill="url(#tailGradient2)" 
          stroke="#FF8C5A" 
          strokeWidth="3"
        />
        <text 
          x="180" 
          y="95" 
          fontFamily="Caveat, cursive" 
          fontSize="52" 
          fontWeight="700" 
          fill="#FF8C5A"
        >
          Fox Family
        </text>
        <text 
          x="180" 
          y="125" 
          fontFamily="Quicksand, sans-serif" 
          fontSize="18" 
          fill="#B8866F"
        >
          Для всей семьи с любовью
        </text>
        <defs>
          <linearGradient id="tailGradient2" x1="50" y1="125" x2="100" y2="195">
            <stop offset="0%" stopColor="#FFB89A"/>
            <stop offset="50%" stopColor="#FF8C5A"/>
            <stop offset="100%" stopColor="#FFDAB9"/>
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg 
      width={size} 
      height={size * 1.5} 
      viewBox="0 0 200 300" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M100 40 L120 20 C125 15 130 15 133 20 L140 35 C142 40 140 45 135 47 L120 55 Z" 
        fill="#FFB89A" 
        stroke="#FF8C5A" 
        strokeWidth="2"
      />
      <path 
        d="M100 40 L80 20 C75 15 70 15 67 20 L60 35 C58 40 60 45 65 47 L80 55 Z" 
        fill="#FFB89A" 
        stroke="#FF8C5A" 
        strokeWidth="2"
      />
      <circle cx="100" cy="80" r="45" fill="#FFDAB9" stroke="#FF8C5A" strokeWidth="3"/>
      <ellipse cx="85" cy="75" rx="6" ry="10" fill="#2D2D2D"/>
      <ellipse cx="115" cy="75" rx="6" ry="10" fill="#2D2D2D"/>
      <path d="M100 85 Q95 90 90 88" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M100 85 Q105 90 110 88" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <circle cx="100" cy="85" r="3" fill="#2D2D2D"/>
      <path 
        d="M100 125 Q80 145 60 160 Q50 167 45 175 Q40 185 50 195 Q60 200 70 190 Q75 185 80 175 L100 140 Z" 
        fill="url(#tailGradient3)" 
        stroke="#FF8C5A" 
        strokeWidth="3"
      />
      <text 
        x="100" 
        y="240" 
        fontFamily="Caveat, cursive" 
        fontSize="42" 
        fontWeight="700" 
        fill="#FF8C5A" 
        textAnchor="middle"
      >
        Fox Family
      </text>
      <text 
        x="100" 
        y="270" 
        fontFamily="Quicksand, sans-serif" 
        fontSize="14" 
        fill="#B8866F" 
        textAnchor="middle"
      >
        Для всей семьи
      </text>
      <defs>
        <linearGradient id="tailGradient3" x1="50" y1="125" x2="100" y2="195">
          <stop offset="0%" stopColor="#FFB89A"/>
          <stop offset="50%" stopColor="#FF8C5A"/>
          <stop offset="100%" stopColor="#FFDAB9"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FoxLogo;
