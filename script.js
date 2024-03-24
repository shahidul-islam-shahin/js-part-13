// 6am to 12am "Good Morning"
// 12am to 6am "Good Afternoon"
// Otherwise "Good Evening"



let time = new Date().getHours();


if( time >= 6 && time <12) {
    console.log('Good Morning')
}

if( time >= 12 && time <18) {
    console.log('Good Afternoon')
}

else {
    console.log('Good Evening')
}