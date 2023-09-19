import React from 'react'

const RotatingSvgStyle = {
  transformOrigin: "center",
  animation: `rotating 1.4s linear infinite`
}

const DashedcircleStyle = {
  strokeDasharray: "62px",
  transformOrigin: "center",
  animation: `dashed 1.4s ease-in-out infinite`
}

export default (props, state) => {
  const { max, yRefreshing, y, phase } = state
  const { zIndex, color, bgColor } = props
  const p = Math.atan(y / max)
  const pMax = Math.atan(yRefreshing / max)
  const r = Math.PI * 10 * 2
  const SvgStyle = phase !== 'refreshing' ? RotatingSvgStyle : {}
  const CircleStyle = phase === 'refreshing' ? DashedcircleStyle : {}
  const refreshed = phase === 'refreshed'
  return (
    
    <div
      key='pull'
      zIndex={zIndex}
      className='cTgxiN'
      style={{
        top: Math.max(refreshed ? Math.atan(1) : p, 0) * max - 10,
        transform: `translate(-50%, -100%) scale(${refreshed ? p : 1},${refreshed ? p : 1})`,
        backgroundColor: bgColor,
        position: "absolute",
        zIndex: zIndex,
        left: "50%",
        borderRadius: "20px",
        width: "40px",
        height: "40px",
        boxShadow: `0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)`,
      }}
    >
      <style>
      {`
        @keyframes dashed {
          0% {
            stroke-dashoffset: 62px;
          }
          50% {
            stroke-dashoffset: calc(62px/4);
            transform: rotate(135deg);
          }
          100% {
            stroke-dashoffset: 62px;
            transform: rotate(450deg);
          }
        }

        @keyframes rotating {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(270deg);
          }
        }
      
      
      `
      }
      </style>
      <svg
        style={{
          transform:`rotate(${yRefreshing}deg)`,
          ...SvgStyle
        }}
        width={40}
        height={40}
        viewBox='0 0 40 40'
      >
        <circle
          style={{ opacity:pMax, ...CircleStyle }}
          stroke={color}
          strokeWidth={2.5}
          strokeDasharray={[r * pMax * 0.6, r * (1 - pMax * 0.6)]}
          strokeDashoffset={-r * (1 - pMax * 0.6)}
          fill='none'
          cx={20}
          cy={20}
          r={8.5}
        />
        { phase !== 'refreshing' &&
            <path
              style={{
                opacity: pMax,
                transformOrigin: '50% 0%',
                transform: `scale(${Math.min(pMax, 1)}, ${Math.min(pMax, 1)})`
              }}
              fill={color}
              d='M23.5,19l5,5l5-5H23.5z'
            />
        }
      </svg>
    </div>
  )
}


