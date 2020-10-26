$(function() {
  $('.one').on('click',function() {
    $('.login').hide().next().show();
    // console.log(1);
  });
  $('.two').on('click',function() {
    $('.register').hide().prev().show();
    // console.log(1);
  });








  // 表单验证
  var form = layui.form;
  var layer = layui.layer;
  form.verify({
    username: function(value, item){ //value：表单的值、item：表单的DOM对象
      if(!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)){
        return '用户名不能有特殊字符';
      }
      if(/(^\_)|(\__)|(\_+$)/.test(value)){
        return '用户名首尾不能出现下划线\'_\'';
      }
      // if(/^\d+\d+\d$/.test(value)){
      //   return '用户名不能全为数字';
      // }
    },
    respass:function(value,item) {
      var pass = $('.myForm .pass').val();
      if (value !== pass) {
       $('.myForm .pass').val('');
       $('.myForm .respwd').val('');
        return '两次密码不一致'
      }
    },
    
    //我们既支持上述函数式的方式，也支持下述数组的形式
    //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
    pass: [
      /^[\S]{6,12}$/
      ,'密码必须6到12位，且不能出现空格'
    ] 
  }); 
//  验证
$('.register .myForm').on('submit', function (e) {
  // 3.2 阻止默认行为
  e.preventDefault()

  // 3.3 发送ajax请求
  $.ajax({
    type: 'post',
    url: 'http://ajax.frontend.itheima.net/api/reguser',
    data: $(this).serialize(),
    success: function (res) {
      // 2.4 请求成功的时候要显示登陆表单
      if (res.status == 0) {
        layer.alert(res.message);
        $('.register').hide().prev().show()
      }else if (res.status === 1) {
        layer.alert(res.message);
      }
    }
  })
})
})