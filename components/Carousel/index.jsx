import { useEffect, useRef } from 'react'

export default function Carousel({ items }) {
  const carouselWrapperRef = useRef()

  useEffect(() => {
    if (carouselWrapperRef) {
      const rightPos = carouselWrapperRef.current.getBoundingClientRect().right
      console.log(rightPos)
    }
  }, [carouselWrapperRef])

  const getScreenWidthAndElementInfo = () => {
    let margin = 0
    const carouselItems = [...carouselWrapperRef.current.children]
    const carouselItemsCoords = carouselItems.map((item, i) => {
      const itemRect = item.getBoundingClientRect()

      if (i === 0) {
        margin = parseInt(window.getComputedStyle(item).marginRight)
      }

      return { left: itemRect.x, right: itemRect.x + itemRect.width }
    })

    return { screenWidth: window.innerWidth, margin, carouselItemsCoords }
  }

  const changeScrollPosition = position => {
    carouselWrapperRef.current.scroll({
      left: position,
      behavior: 'smooth',
    })
  }

  const handleNextClick = () => {
    const { screenWidth, margin, carouselItemsCoords } = getScreenWidthAndElementInfo()

    carouselItemsCoords.every((item, i) => {
      const scrollDiff = item.right - screenWidth
      const scrollPos = carouselWrapperRef.current.scrollLeft

      if (scrollDiff > 0) {
        changeScrollPosition(scrollPos + scrollDiff + margin + 60)

        return false
      }

      return true
    })
  }

  const handlePrevClick = () => {
    const { margin, carouselItemsCoords } = getScreenWidthAndElementInfo()
    const reversedArray = carouselItemsCoords.reverse()

    reversedArray.every((item, i) => {
      const scrollPos = carouselWrapperRef.current.scrollLeft

      if (reversedArray[reversedArray.length - 1].left > 0) {
        changeScrollPosition(0)

        return false
      }

      if (item.left < 0) {
        changeScrollPosition(scrollPos + item.left - margin - 60)

        return false
      }

      return true
    })
  }

  const renderedCarouselItems = items.map(item => {
    return <div className="carousel-item">{item}</div>
  })

  return (
    <div className="carousel">
      <button className="carousel-button carousel-prev" onClick={handlePrevClick} tabIndex="1">
        <i className="fa-solid fa-angle-left" />
      </button>
      <div className="carousel-wrapper" ref={carouselWrapperRef}>
        {renderedCarouselItems}
      </div>
      <button className="carousel-button carousel-next" onClick={handleNextClick} tabIndex="2">
        <i className="fa-solid fa-angle-right" />
      </button>
    </div>
  )
}
