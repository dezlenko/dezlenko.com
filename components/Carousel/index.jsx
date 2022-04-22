import { useRef } from 'react'

export default function Carousel() {
  const carouselWrapperRef = useRef()

  const handleScroll = e => {
    const scrollPos = carouselWrapperRef.current.scrollLeft
  }

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

  const changeScrollPos = pos => {
    carouselWrapperRef.current.scroll({
      left: pos,
      behavior: 'smooth',
    })
  }

  const handleNextClick = () => {
    const { screenWidth, margin, carouselItemsCoords } =
      getScreenWidthAndElementInfo()

    carouselItemsCoords.every((item, i) => {
      const scrollDiff = item.right - screenWidth
      const scrollPos = carouselWrapperRef.current.scrollLeft

      if (i === carouselItemsCoords.length - 1) {
        changeScrollPos(carouselWrapperRef.current.clientWidth)

        return false
      }

      if (scrollDiff > 0) {
        changeScrollPos(scrollPos + scrollDiff + margin + 60)

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

      if (i === reversedArray.length - 1) {
        changeScrollPos(0)

        return false
      }

      if (item.left < 0) {
        changeScrollPos(scrollPos + item.left - margin - 60)

        return false
      }

      return true
    })
  }

  return (
    <div className="carousel">
      <button
        className="carousel-button carousel-prev"
        onClick={handlePrevClick}
        tabIndex="1"
      >
        <i className="fa-solid fa-angle-left" />
      </button>
      <div
        className="carousel-wrapper"
        ref={carouselWrapperRef}
        onScroll={handleScroll}
      >
        <div className="carousel-item"></div>
        <div className="carousel-item"></div>
        <div className="carousel-item"></div>
        <div className="carousel-item"></div>
        <div className="carousel-item"></div>
        <div className="carousel-item"></div>
        <div className="carousel-item"></div>
        <div className="carousel-item"></div>
      </div>
      <button
        className="carousel-button carousel-next"
        onClick={handleNextClick}
        tabIndex="2"
      >
        <i className="fa-solid fa-angle-right" />
      </button>
    </div>
  )
}
