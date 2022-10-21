export function scaleBetween (startColor, endColor) {
    return chroma.scale([startColor, endColor])
    .mode('lch').colors(6)
}