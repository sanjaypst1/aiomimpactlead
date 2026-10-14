import { roles, impactLeadRoleId } from "@/content/roles";

const ORBIT = roles.filter((r) => r.id !== impactLeadRoleId).slice(0, 8);

export function OperatingModelSvg() {
  const center = { x: 200, y: 200 };
  const radius = 130;

  return (
    <figure className="mx-auto max-w-md">
      <svg
        viewBox="0 0 400 400"
        role="img"
        aria-labelledby="om-svg-title om-svg-desc"
        className="h-auto w-full"
      >
        <title id="om-svg-title">Operating model role network</title>
        <desc id="om-svg-desc">
          Impact Lead at the centre connected to eight partner roles in a ring.
        </desc>
        <circle cx={center.x} cy={center.y} r={radius} fill="none" stroke="#D9D2C8" strokeWidth="1" strokeDasharray="4 4" />
        {ORBIT.map((role, i) => {
          const angle = (i / ORBIT.length) * Math.PI * 2 - Math.PI / 2;
          const x = center.x + radius * Math.cos(angle);
          const y = center.y + radius * Math.sin(angle);
          return (
            <g key={role.id}>
              <line
                x1={center.x}
                y1={center.y}
                x2={x}
                y2={y}
                stroke="#2A6F6A"
                strokeWidth="1"
                opacity="0.5"
              />
              <circle cx={x} cy={y} r="36" fill="#F7F4EF" stroke="#3B6B8C" strokeWidth="1.5" />
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="9"
                fill="#1A2330"
                fontFamily="system-ui, sans-serif"
              >
                {role.name.split(" ").slice(0, 2).join(" ")}
              </text>
            </g>
          );
        })}
        <circle cx={center.x} cy={center.y} r="52" fill="#0B1F33" />
        <text
          x={center.x}
          y={center.y - 6}
          textAnchor="middle"
          fill="#F7F4EF"
          fontSize="11"
          fontWeight="600"
          fontFamily="system-ui, sans-serif"
        >
          Impact
        </text>
        <text
          x={center.x}
          y={center.y + 10}
          textAnchor="middle"
          fill="#F7F4EF"
          fontSize="11"
          fontWeight="600"
          fontFamily="system-ui, sans-serif"
        >
          Lead
        </text>
      </svg>
      <figcaption className="mt-3 text-center text-sm text-muted">
        Illustrative integrator pattern — Impact Lead brokers evidence and gates; partner
        roles retain decision rights.
      </figcaption>
    </figure>
  );
}
