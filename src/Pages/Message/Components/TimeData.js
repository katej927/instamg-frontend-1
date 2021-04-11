export function TimeFormat(postingTime, currentTime) {
  // 포스팅 시간 정보
  const setDate = new Date(postingTime);
  const setDateYear = setDate.getFullYear();
  const setDateMonth = setDate.getMonth() + 1;
  const setDateDate = setDate.getDate();
  const setDateMidnight = new Date(setDate.setHours(0, 0, 0, 0));

  // 현재 시간 정보
  const now = new Date();
  const nowYear = now?.getFullYear();

  // 현재 시간- 포스트 시간
  const distance = now?.getTime() - setDate.getTime();
  const distanceMidnight = now?.getTime() - setDateMidnight.getTime();

  // 시간 차 (년, 일)
  const yearGap = nowYear - setDateYear;
  const DateGap = Math.floor(distanceMidnight / (1000 * 60 * 60 * 24));
  const hoursGap = Math.floor(distance / (1000 * 60 * 60));

  if (yearGap > 0) {
    return `${setDateYear}년 ${setDateMonth}월 ${setDateDate}일`;
  } else if (DateGap > 6) {
    return `${setDateMonth}월 ${setDateDate}일`;
  } else if (6 >= DateGap && DateGap >= 1) {
    return `${DateGap}일 전`;
  } else {
    return `${hoursGap}시간 전`;
  }
}
