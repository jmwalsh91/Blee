import chroma from "chroma-js"
export function scaleBetween (startColor, endColor) {
    return chroma.scale([startColor, endColor])
    .mode('lch').colors(6)
}

export function scaleBetweenNormalized (scaleArray) {
    return chroma.scale(scaleArray)
    .mode('lch').colors(6).correctLightness()
    
}