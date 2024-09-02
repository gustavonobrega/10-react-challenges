import { useState } from 'react';
import styles from './style.module.css';

type Color = {
  type: 'HEX' | 'RGB'
  value: string
}

export function RandomColorGenerator() {
  const [color, setColor] = useState<Color>(() => {
    const randomHexColor = Math.floor(Math.random() * 16777215).toString(16);

    return { type: 'HEX', value: `#${randomHexColor}` }
  })

  function createHex() {
    if (color.type === 'HEX') {
      alert('The color is already HEX')
      return
    }

    const transformToHex = color.value.slice(4, -1).split(',')

    const hex = transformToHex.reduce((acc, item) => {
      
      const convertedHex = Number(item).toString(16).toUpperCase()
      
      return acc += convertedHex.length == 1 ? "0" + convertedHex : convertedHex
    }, '#')

    setColor({ type: 'HEX', value: hex })
  }

  function createRgb() {
    if (color.type === 'RGB') {
      alert('The color is already RGB')
      return
    }

    const rgb = {
      r: parseInt(color.value.slice(1, 3), 16),
      g: parseInt(color.value.slice(3, 5), 16),
      b: parseInt(color.value.slice(5, 7), 16)
    }

    const value = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`

    setColor({ type: 'RGB', value })
  }

  function randomColorUtility(length: number) {
    return Math.floor(Math.random() * length)
  }

  function generateColor() {
    if (color.type === 'HEX') {

      const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

      let hexColor = '#'
      for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColorUtility(hex.length)]
      }

      setColor({ type: 'HEX', value: hexColor })

    } else {
      const randomRgb = `rgb(${randomColorUtility(256)}, ${randomColorUtility(256)}, ${randomColorUtility(256)})`

      setColor({ type: 'RGB', value: randomRgb })
    }
  }

  return (
    <div className={styles.container} style={{ background: color.value }} >
      <div className="menu">
        <button type="button" onClick={createHex} >Create HEX Color</button>
        <button type="button" onClick={createRgb}>Create RGB Color</button>
        <button type="button" onClick={generateColor}>Generate Random Color</button>
      </div>

      <div className={styles.content}>
        <strong>{color.type} Color</strong>

        <h1>{color.value}</h1>
      </div>
    </div>
  )
}
