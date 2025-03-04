// Code your solution in this file!
function distanceFromHqInBlocks(pickuplocation) {
  const hqlocation = 42;
  return Math.abs(pickuplocation - hqlocation);
}
distanceFromHqInBlocks(pickuplocation(30));

function distanceFromHqInFeet(pickuplocation) {
  const blocks = distanceFromHqInBlocks(pickuplocation);
  const feetperblock = 264;
  return blocks * feetperblock;
}
distanceFromHqInFeet(pickuplocation(30));

function distanceTravelledInFeet(start, destination) {
  const blockstravelled = Math.abs(destination - start);
  const feet = 264;
  return blockstravelled * feet;
}
distanceTravelledInFeet((30, 25));

function calculatesFarePrice(start, destination) {
  const blockstravelled = Math.abs(destination - start);
  const feet = 264;
  let distanceCovered = blockstravelled * feet;

  if (distanceCovered <= 400) {
    return 0;
  } else if (distanceCovered > 400 && distanceCovered < 2000) {
    return (distanceCovered - 400) * 0.02;
  } else if (distanceCovered > 2000 && distanceCovered <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
