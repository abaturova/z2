// 1
let m = 55
let n
if(m > 50){
	n = 'большое'
}else n = 'маленькое'
//console.log(n)

// 2
let a = 45
let b = 67
while(a <= b){
	//console.log(a)
	a++
}

// 3
let c = 45
let d = 670
while(c <= d){
	if(c%10 === 0){
		//console.log(c)
		c++
	}else c++
}

// 4 

for(let i=45; i<=67;i++){
	//console.log(i)
}
for(let j=45;j<=670;j++){
	if(j%10 === 0){
		//console.log(j)
	}
}

// 5
let nn = 7
/*switch(nn){
	case 0:
		console.log('Ноль')
		break
	case 1:
		console.log('Один')
		break
	case 2:
		console.log('Два')
		break
	case 3:
		console.log('Три')
		break
	case 4:
		console.log('Четыре')
		break
	case 5:
		console.log('Пять')
		break
	case 6:
		console.log('Шесть')
		break
	case 7:
		console.log('Семь')
		break
	case 8:
		console.log('Восемь')
		break
	case 9:
		console.log('Девять')
		break
}*/

// 6
for(let k=0;k<10;k++){
	document.write("<img src='img.jpg'/>")
}

// 7
let size = 120
let unit = 'Гб'
switch(unit){
	case 'Кб':
		size = 120*1024
		console.log(size)
		break
	case 'Мб':
	size = 120*1024*1024
		console.log(size)
		break
	case 'Гб':
	size = 120*1024*1024*1024
		console.log(size)
		break
}

// 8
