import React from 'react'
import Link from 'next/link'
import { Text } from 'evergreen-ui'

const Logo = ({ ...styles }) => {
  return (
    <Link href="/">
      <a>
        <Text fontSize="30px" color="#47B881" {...styles}>
          <span className="text-purple-600">{'<'}</span>
          <strong> Y3rb1t4 </strong>
          <span className="text-purple-600">{'/>'}</span>
        </Text>
      </a>
    </Link>
  )
}

export default Logo
