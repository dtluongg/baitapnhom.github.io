$(document).ready(function() {
    $('input[name="payment-method"]').change(function() {
      var selected = $('input[name="payment-method"]:checked').val();
      $('.payment-info').hide();
      $('.payment-' + selected + '-info').show();
    });
  });


  // $('input[name="payment-method"]').change(function() {...}): 
  // Điều này là một sự kiện 'change' (thay đổi) được áp dụng cho tất cả các ô nhập liệu có thuộc tính name là "payment-method". 
  // Sự kiện này sẽ được kích hoạt khi người dùng chọn một phương thức thanh toán khác.

  // var selected = $('input[name="payment-method"]:checked').val();: 
  // Lấy giá trị của ô nhập liệu được chọn trong nhóm phương thức thanh toán.

  // $('.payment-info').hide();: Ẩn tất cả các phần tử có lớp CSS là payment-info. 
  // Các phần tử này có thể là container chứa thông tin của các phương thức thanh toán.

  // $('.payment-' + selected + '-info').show();: 
  // Hiển thị phần tử có lớp CSS là payment-X-info, 
  // trong đó X là giá trị của phương thức thanh toán được chọn. 
  // Cụ thể, nó sẽ hiển thị thông tin liên quan đến phương thức thanh toán được chọn và ẩn đi thông tin 
  // của các phương thức thanh toán khác.