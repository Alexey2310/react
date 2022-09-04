import { useState, useLayoutEffect } from 'react'
const queries = [
  '(max-width:766px)',
  '(min-width:767px) and (max-width:1199px)',
  '(min-width:1200px)'
]
export const useMatchMedia = () => {
  const mediaQueryList = queries.map((query) => matchMedia(query))
  const getValues = () => mediaQueryList.map((mQr) => mQr.matches)
  const [Values, setValues] = useState(getValues)
  useLayoutEffect(() => {
    const handler = () => setValues(getValues)
    mediaQueryList.forEach((mQr) => mQr.addEventListener('change', handler))
    return () => {
      mediaQueryList.forEach((mQr) =>
        mQr.removeEventListener('change', handler)
      )
    }
  })
  return ['isMobile','isTablet','isDesctop'].reduce((acc,screen,index)=>({
    ...acc,
    [screen]:Values[index]
  }),{})
}


