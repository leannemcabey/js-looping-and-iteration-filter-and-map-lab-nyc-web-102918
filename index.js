function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {
    return driver.name
  })
}

function exactMatch(drivers, keyValue) {
  key = Object.keys(keyValue)[0]
  value = Object.values(keyValue)[0]
  return drivers.filter(function (driver) {
    return driver[key] === value
  })
}

function exactMatchToList(drivers, keyValue) {
  return exactMatch(drivers, keyValue).map(function (driver) {
    return driver.name
  })
}
