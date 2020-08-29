let text = "karan is good boy, karan rocks"
let regex1 = /karan/;
let regex2 = /karan/g;
console.log(text.match(regex1))
console.log(text.match(regex2))

text = "lorem ipsec isopoc asdvc."
regex1 = /lorem|isopoc/g
console.log(text.match(regex1))

text = "lorem ipsec isopoc asdvc."
regex1 = /[aeiou]/g
console.log(text.match(regex1))


text = "once upon a time, there was a boy."
regex1 = /[^a-k]/g
console.log(text.match(regex1))

text = "once upon a time, there was a boy. Named 'KAARAAAAAN'"
regex1 = /AA+/g
console.log(text.match(regex1))

text = "aaaaAAAAaaaaAAAAaa"
regex1 = /[AA]+/g
console.log(text.match(regex1))

text = "aaaaAAAAaaaaAAAAaa"
regex1 = /[AA]*/g
console.log(text.match(regex1))

//  everything excluding alpha-numeric character
text = "hii i'm karan. Wanna-be h@X0r"
regex1 = /\W/g
console.log(text.match(regex1))

//  every aqlphanumeric character
text = "hii i'm karan. Wanna-be h@X0r"
regex1 = /\w/ig
console.log(text.match(regex1))

regex1 = /^hi./ig
console.log(text.match(regex1))

regex1 = /0r$/ig
console.log(text.match(regex1))

regex2 = /\S/ig
console.log(text.match(regex2))

regex2 = /\s/ig
console.log(text.match(regex2))

//  everything except numeric
regex2 = /\D/g
console.log(text.match(regex2))

//  only numeric
regex2 = /\d/g
console.log(text.match(regex2))

//  quantity specifier
let A = "woooow woow wooooow WOOOOOW";
let regex = /wo{4,6}w/ig
console.log(A.match(regex))

//  user name starts with alphabet and ends on numeric character with character range of 8 to 10
let name = "karansh491"
const nameC = /^\w{8,10}\d$/
console.log(name.match(nameC))

//  passwd security check with length atlest 8 char, including alpha-numeric values but no spaces and no numberic character in the ending
let passwd = " karansh123arma"
const passwdC = /\w{8,}\S\D$/i
console.log(passwd.match(passwdC)) 

//  only serach for character, specific number of times.
let str = 'karan is good'
regex = /go{2}d/i
console.log(str.match(regex))

//  check for optional, meaning not necessarily available but if available, also fine. 
name = 'karan karaan karaaan karansh'
regex = /karaa?n/gi
regex1 = /karan(sh)?/ig
console.log(name.match(regex));
console.log(name.match(regex1));

let correct = 'colour color'
regex = /colou?r/ig     //  true for both 'color' and 'colour'
console.log(correct.match(regex))

//  loookahead
name = 'karan'
regex = /(?=\w)(?=\D)/  //  lookahead, dont return anything but check for all patterns
console.log(regex.test(name))

str = "karan sharma is a student based on India"
regex = /(\w+)/i
console.log(str.replace(regex, "komal"))

str = "karan is good guy"
regex = /(\w+)\s(\w+)\s(\w+)\s(\w+)/
console.log(str.replace(regex, "$3 $4 $2 $1"))

str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/
let replaceText = "$3 $2 $1"
let result = str.replace(fixRegex, replaceText);
console.log(result)

//  remove white spaces from ending and beginning

let hello = "   Hello, World!   " 
let wsRegex = /(\s{3,})/ig
result = hello.replace(wsRegex, "")
console.log(result=="Hello, World!")
wsRegex = /^\s+|\s+$/g
result = hello.replace(wsRegex, "")
console.log(result=="Hello, World!")


str = "    karan rootz491     "
regex = /(\s{3,})/ig
console.log(str.replace(regex, ""))