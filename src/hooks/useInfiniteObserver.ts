
import { type InfiniteQueryObserverResult} from "@tanstack/react-query"
import { useEffect, useRef  } from "react"

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

  const target = useRef<HTMLDivElement>(null)

  const observerCallBack: IntersectionObserverCallback = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting && (hasNextPage === true)) {
        void fetchNextPage()
      }
    })
  }


  useEffect(() => {
    if(target === null || target.current === null) return

    const observer = new IntersectionObserver(observerCallBack, {threshold})
    observer.observe(target.current)

    return ()=> { 
      if(target === null || target.current === null) return
      observer.unobserve(target.current); }
  }, [observerCallBack, threshold, hasNextPage, fetchNextPage])


  return {target}
}

export default useInfitityObserver