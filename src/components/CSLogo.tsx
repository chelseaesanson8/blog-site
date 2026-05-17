export default function CSLogo({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 320" className={className} role="img">
        <title>CS</title>
        <desc>Block ASCII art forming the letters CS in orange</desc>
        <rect width="512" height="320" fill="transparent" rx="10"/>
        <text
            x="40"
            y="64"
            fontFamily="'Courier New', Courier, monospace"
            fontSize="40"
            fill="rgba(251,146,60,0.92)"
            xmlSpace="preserve"
        >
            <tspan x="40" dy="0">&#xA0;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2557;&#xA0;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2557;</tspan>
            <tspan x="40" dy="1.18em">&#x2588;&#x2588;&#x2554;&#x2550;&#x2550;&#x2550;&#x2550;&#x255D;&#xA0;&#x2588;&#x2588;&#x2554;&#x2550;&#x2550;&#x2550;&#x2550;&#x255D;</tspan>
            <tspan x="40" dy="1.18em">&#x2588;&#x2588;&#x2551;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2557;</tspan>
            <tspan x="40" dy="1.18em">&#x2588;&#x2588;&#x2551;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#x255A;&#x2550;&#x2550;&#x2550;&#x2550;&#x2588;&#x2588;&#x2551;</tspan>
            <tspan x="40" dy="1.18em">&#x255A;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2557;&#xA0;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2551;</tspan>
            <tspan x="40" dy="1.18em">&#xA0;&#x255A;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x255D;&#xA0;&#x255A;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x255D;</tspan>
        </text>
    </svg>
  )
}