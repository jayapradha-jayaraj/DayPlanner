//CurrenDay Display
const day= dayjs();
const formatDay= day.format('dddd, MMMM D');
//console.log("Day check:"+formatDay);
$("#currentDay").text(formatDay);


//Save the text
const saveBtn=$("button")