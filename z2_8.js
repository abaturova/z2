let weekday = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье']
let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
let d = 0
let tab , a
document.write("<table border='1'>")

document.write("<tr>")
for(let w=0;w<weekday.length;w++){
		document.write("<th>")
		document.write(weekday[w])
		document.write("</th>")
	}
document.write("</tr><tr>")

while(d<nums.length){
	a = nums[d]
	if(d%7 === 0){
		for(let i=0;i<7;i++){
			
			if(a <= 31){
				tab += '<td>' + a + '</td>'
				a++
			}else tab += '<td> </td>'
		}
	}else if (d%7 === 6){
			tab += '</tr><tr>'
	}
	console.log(a)
	d++	
}
document.write(tab)

document.write("</table>")
