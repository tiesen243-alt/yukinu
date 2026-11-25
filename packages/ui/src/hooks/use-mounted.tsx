import * as React from 'react'

export const useMounted = (): boolean => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    // oxlint-disable-next-line react/set-state-in-effect
    setMounted(true)
  }, [])

  return mounted
}
