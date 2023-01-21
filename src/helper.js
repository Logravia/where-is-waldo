export function inRange(x, min, max) {
  return x >= min && x <= max;
}

export function withinRectangle(point, rect) {
  return inRange(point.x, rect.minX, rect.maxX) &&
    inRange(point.y, rect.minY, rect.maxY)
}
