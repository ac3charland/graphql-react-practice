import {useLocation} from 'react-router'
import React from 'react'

export function useQueryParams() {
    const {search} = useLocation()
  
    return React.useMemo(() => new URLSearchParams(search), [search])
  }
