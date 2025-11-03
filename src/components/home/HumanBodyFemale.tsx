import Image from 'next/image'
import React from 'react'

export default function HumanBodyFemale() {
  return (
    <div className="max-w-7xl">
          <div>
            <Image
              src="/images/bodySvg.svg"
              alt="Human Body"
              width={800}
              height={600}
            />
          </div>
        </div>
  )
}
