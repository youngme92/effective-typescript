;(() => {
  interface ScatterProps {
    // The data
    xs: number[]
    ys: number[]

    // Display
    xRange: [number, number]
    yRange: [number, number]
    color: string

    // Events
    onClick: (x: number, y: number, index: number) => void
  }
  interface ScatterProps {
    xs: number[]
    ys: number[]
    // ...
    onClick: (x: number, y: number, index: number) => void

    // Note: if you add a property here, update shouldUpdate!
  }
})()
