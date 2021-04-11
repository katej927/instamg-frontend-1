export function TimeFormat(postingTime, currentTime) {
  // 포스팅 시간 정보
  const setDate = new Date(postingTime);
  const setDateYear = setDate.getFullYear();
  const setDateMonth = setDate.getMonth() + 1;
  const setDateDate = setDate.getDate();

  // 현재 시간 정보
  const now = new Date();
  const nowYear = now?.getFullYear();

  // 현재 시간- 포스트 시간
  const distance = now?.getTime() - setDate.getTime();

  // 시간 차 (년, 일)
  const yearGap = nowYear - setDateYear;
  const DateGap = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hoursGap = Math.floor(distance / (1000 * 60 * 60));
  const minutesGap = Math.floor(distance / (1000 * 60));

  if (minutesGap < 1) {
    return "방금 전";
  }
  if (hoursGap < 1) {
    return `${minutesGap}분 전`;
  }
  if (hoursGap < 24) {
    return `${hoursGap}시간 전`;
  }
  if (6 >= DateGap && DateGap >= 1) {
    return `${DateGap}일 전`;
  }
  if (DateGap > 6) {
    return `${setDateMonth}월 ${setDateDate}일`;
  }
  if (yearGap > 0) {
    return `${setDateYear}년 ${setDateMonth}월 ${setDateDate}일`;
  }
}
