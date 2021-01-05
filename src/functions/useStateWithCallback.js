import { useCallback, useEffect, useRef, useState } from 'react'

export default function useStateWithCallback(initialState) {
  const [state, _setState] = useState(initialState)

  const callbackRef = useRef()
  const isFirstCallbackCall = useRef(true)

  const setState = useCallback((setStateAction, callback) => {
    callbackRef.current = callback
    _setState(setStateAction)
  }, [])

  useEffect(() => {
    if (isFirstCallbackCall.current) {
      isFirstCallbackCall.current = false
      return
    }
    callbackRef.current(state)
  }, [state])

  return [state, setState]
}
