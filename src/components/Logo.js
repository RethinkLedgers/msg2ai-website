'use client'
import { useState } from 'react'

export default function Logo() {
  const [imageFailed, setImageFailed] = useState(false)
  const [altImageFailed, setAltImageFailed] = useState(false)

  const handleImageError = () => {
    if (!altImageFailed) {
      setImageFailed(true)
    } else {
      setImageFailed(true)
      setAltImageFailed(true)
    }
  }

  const handleAltImageError = () => {
    setAltImageFailed(true)
  }

  if (imageFailed && altImageFailed) {
    return (
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm font-bold">m2</span>
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          msg2ai
        </span>
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-2">
      {!imageFailed ? (
        <img 
          src="/logo-msg2ai.png" 
          alt="msg2ai Logo" 
          className="h-8 w-auto"
          onError={handleImageError}
        />
      ) : !altImageFailed ? (
        <img 
          src="/logo-msg2ai-224x224.jpg" 
          alt="msg2ai Logo" 
          className="h-8 w-auto"
          onError={handleAltImageError}
        />
      ) : null}
    </div>
  )
}