// Code your solution here
function findMatching(drivers, string) {
  const newDrivers = drivers.filter(name => {
    return name.toLowerCase() === string.toLowerCase();
  })
  return newDrivers
}
