import { ReactElement } from 'react'
import { useIsFetching, useIsMutating } from 'react-query'

function Loading(): ReactElement {
  const isFetching = useIsFetching()
  const isMutating = useIsMutating()

  const shown = isFetching || isMutating ? 'inherit' : 'none'

  return (
    <div className="absolute left-[50vw] top-[50vw] z-20" style={{ display: shown }}>
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-dashed dark:border-violet-400"></div>
    </div>
  )
}

export default Loading
