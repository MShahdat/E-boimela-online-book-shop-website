
const visitedComponents = new Set()
export const isFirstVisit = (component) => {
  if(visitedComponents.has(component)){
    return false
  }
  visitedComponents.add(component)
  return true
}