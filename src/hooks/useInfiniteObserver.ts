
import { type InfiniteQueryObserverResult} from "@tanstack/react-query"
import { useEffect  } from "react"
import {useInView} from 'react-intersection-observer'
interface Props {
  threshold?: number
  hasNextPage: boolean | undefined
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>
}

const useInfitityObserver = ({
  threshold =  0.3,
  hasNextPage,
  fetchNextPage
} : Props ) => {

  const {ref, inView} = useInView({threshold})

  useEffect(() => {
    if(!inView) return

    if(hasNextPage === true) {
      void fetchNextPage()
    }
  }, [inView, threshold, hasNextPage, fetchNextPage])


  return {target: ref}
}

export default useInfitityObserver