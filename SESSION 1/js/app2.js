//BTVN :
alert("Hello Teacher");
alert("Sau đây là điểm của một sinh viên cho các môn: Vật lý, Hóa học, và Sinh học sau đó là điểm trung bình và tổng của những điểm này.");
let a =prompt("Điểm vật lý");
let b =prompt("Điểm hóa học");
let c=prompt("Điểm sinh học");
let tongdiem = Number(a) + Number(b) + Number(c);
let trungbinh = tongdiem / 3;
alert(`Điểm trung bình = ${trungbinh} điểm`);
alert( `Tổng điểm = ${tongdiem} điểm`);
console.log(`Điểm trung bình = ${trungbinh} điểm`);
console.log(`Tổng điểm = ${tongdiem} điểm`);

alert("Bây giờ chúng ta sẽ chuyển từ độ C sang độ F");
let D = prompt('Nhập độ C');
let F = 9/5 * Number(D) +32 ;
alert(`${Number(D)} 0C = ${F} 0F`);
console.log(`${Number(D)} 0C = ${F} 0F`);

alert(" Sau đây là tính diện tích hình tròn");
let r =prompt("Bán kính bằng?");
let dientich = 3.14 * Number(r)**2;
alert(`s = ${dientich}`);
console.log(`s = ${dientich}`);

alert(" Sau đây là tính chu vi hình tròn");
let bankinh =prompt("Bán kính đường tròn");
let chuvi = 3.14 * Number(bankinh) * 2;
alert(`c = ${chuvi}`);
console.log(`c = ${chuvi}`);
