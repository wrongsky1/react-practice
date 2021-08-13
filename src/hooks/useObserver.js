import {useRef, useEffect} from 'react'

export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef()
    useEffect(() => {
        if(isLoading) return;
        if(observe.current) observer.current.disconnect()
        var cb = function(entries, observer) {
          if(entries[0].isIntersecting && canLoad){
            callback
          }
        };
        observer.current = new IntersectionObserver(cb)
        observer.current.observe(ref.current)
    }, [isLoading])
}