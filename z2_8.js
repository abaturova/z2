let weekday = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье']
let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

document.write("<table border='1'>")

document.write("<tr>")
for(let w=0;w<weekday.length;w++){
		document.write("<th>")
		document.write(weekday[w])
		document.write("</th>")
	}
document.write("</tr>")

for(let i=0;i<5;i++){
	document.write("<tr>")
	for(let j=0;j<7;j++){
			document.write("<td>")
			for(let n=0;n<nums.length;n++){					
					document.write(nums[n])
			}
			document.write("</td>")				
	}
	document.write("</tr>")
}

document.write("</table>")