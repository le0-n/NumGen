let xxx = Math.floor(Math.random() * 1000)
let xx1 = Math.floor(Math.random() * 100) 
let xx2 = Math.floor(Math.random() * 100) 
let code = [33, 90, 91, 93, 94, 95, 99]
let randomCode = code[Math.floor(Math.random() * code.length)]

let len_xxx = xxx.toString().length
let len_xx1 = xx1.toString().length
let len_xx2 = xx2.toString().length

if (len_xxx == 1) {
    xxx = '00' + xxx
} else if (len_xxx == 2) {
        xxx = '0' + xxx
}
if (len_xx1  == 1) {
    xx1 = '0' + xx1
}
if (len_xx2 == 1) {
    xx2 = '0' + xx2
}

console.log(`+998 ${randomCode} ${xxx} ${xx1} ${xx2}`)