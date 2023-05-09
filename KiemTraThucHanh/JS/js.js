function insert_Row() {
  
    var table = document.getElementById("sampleTable");
    var row = table.insertRow();
    var stt = row.insertCell(0);
    var mabn = row.insertCell(1);
    var matkhau = row.insertCell(2);
    var ngaykham = row.insertCell(3);
    var phuthu = row.insertCell(4);
    var chuyenkhoa = row.insertCell(5);
    stt.innerHTML = table.rows.length -1 ; 
    mabn.innerHTML = document.querySelector('.input1').value;
    matkhau.innerHTML = document.querySelector('.input2').value;
    ngaykham.innerHTML = document.querySelector('.input3').value;
    // phuthu.innerHTML = document.querySelector('.phuthu').value; 
    let loai = document.querySelectorAll("input[type=checkbox]");
  
    chuyenkhoa.innerHTML = document.querySelector('.chuyenkhoa').value; 

    let count = 0;
    for (let i = 0; i < loai.length; i++) {
        if (loai[i].checked) count++;
    }
    phuthu.innerHTML = count * 500000;

  
   
  
  
 
  }

//   function checkName(){
//     var ma=document.getElementById('ma').value
//     var errorName=document.getElementById('errorName');
//     var regexName=/^[BN]{2}-\d{5}$/
//     if(ma =='' || ma == null){
//       errorName.innerHTML="Mã Bệnh Nhân khong duoc de trong";
//     }else if(!regexName.test(ma)){
//       errorName.innerHTML="Mã Phải Theo định dạng BN-YYYYY"
      
//     }else{
//       errorName.innerHTML=""
//       return ma;
      
//     }
  
//   }


//   function pass(){
//       var pwd=document.getElementById('pwd').value
//       var errorPass=document.getElementById('errorPass');
//       var regexPass=/^.{6,}$/

//       if(pwd =='' || pwd == null){
//         errorPass.innerHTML="Mật Khẩu khong duoc de trong";
//       }else if(!regexPass.test(pwd)){
//         errorPass.innerHTML="Mật Khẩu phải 6 kí tự trở lên"
        
//       }else{
//         errorPass.innerHTML=""
//         return pwd;
        
//       }



//   }

//   function date(){
//     var ngayKham = document.getElementById("inputDate").value
//     var ErrDate = document.getElementById("ErrDate")
//     var ngayHienTai = new Date()
//     var ngay_Kham = new Date(ngayKham)
//      if (ngay_Kham < ngayHienTai){
//       ErrDate.style.color = "red"
//       ErrDate.innerHTML = "Ngay kham phai sau ngay hien tai"
//       return false;
//       }else{
//         ErrDate.innerHTML = ""
//       }
  
// }

  function FormValidate(){
    var ma=document.getElementById('ma').value
    var errorName=document.getElementById('errorName');
    var regexName=/^[BN]{2}-\d{5}$/
    if(ma =='' || ma == null){
      errorName.innerHTML="Mã Bệnh Nhân khong duoc de trong";
    }else if(!regexName.test(ma)){
      errorName.innerHTML="Mã Phải Theo định dạng BN-YYYYY"
      
    }else{
      errorName.innerHTML=""
      // return ma;
      
    }


    var pwd=document.getElementById('pwd').value
      var errorPass=document.getElementById('errorPass');
      var regexPass=/^.{6,}$/

      if(pwd =='' || pwd == null){
        errorPass.innerHTML="Mật Khẩu khong duoc de trong";
      }else if(!regexPass.test(pwd)){
        errorPass.innerHTML="Mật Khẩu phải 6 kí tự trở lên"
        
      }else{
        errorPass.innerHTML=""
        // return pwd;
        
      }

      var ngayKham = document.getElementById("inputDate").value
    var ErrDate = document.getElementById("ErrDate")
    var ngayHienTai = new Date()
    var ngay_Kham = new Date(ngayKham)
     if (ngay_Kham < ngayHienTai){
      ErrDate.style.color = "red"
      ErrDate.innerHTML = "Ngay kham phai sau ngay hien tai"
      return false;
      }else{
        ErrDate.innerHTML = ""
      }


      return false;
      


    
  }


 



  
 
