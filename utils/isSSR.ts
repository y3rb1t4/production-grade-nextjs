export const isSSR = () => typeof window === 'undefined'

export const isClient = () => typeof window !== 'undefined'
