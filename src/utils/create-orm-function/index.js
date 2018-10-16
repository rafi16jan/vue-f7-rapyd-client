export function generateValues (data) {
  return Array.isArray(data.values)
    ? data.values
    : (data.values.name
      ? [data.values]
      : []
    )
}