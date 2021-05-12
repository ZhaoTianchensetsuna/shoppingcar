$(function() {
    $(".checkall").change(function() {
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));
        if ($(this).prop("checked")) {
            $(".cart-item").addClass("check-cart-item");
        } else { $(".cart-item").removeClass("check-cart-item"); }
        getSum();
    })
    $(".j-checkbox").change(function() {
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else { $(".checkall").prop("checked", false); }
        if ($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else { $(this).parents(".cart-item").removeClass("check-cart-item"); }
        getSum();
    })
    $(".increment").click(function() {
        var n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1);
        console.log(p);
        p = (n * p).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + p);
        getSum();


    })
    $(".decrement").click(function() {
        var n = $(this).siblings(".itxt").val();
        if (n == 1) {
            return false;
        }

        n--;
        $(this).siblings(".itxt").val(n);
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1);

        p = (n * p).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + p);
        getSum();


    })

    $(".itxt").change(function() {
        var n = $(this).val();
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1);
        p = (n * p).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + p);
        getSum();
    })

    getSum();

    function getSum() {
        var count = 0;
        var sum = 0;
        $(".itxt").each(function(i, ele) {
            count += parseInt($(ele).val());
            console.log(count);
        })
        $(".p-sum").each(function(i, ele) {
            sum += parseFloat($(ele).text().substr(1));
            console.log(sum);
        })

        $(".amount-sum em").text(count);
        $(".price-sum em").text("￥" + sum.toFixed(2));
    }
    $(".p-action a").click(function() {
        $(this).parents(".cart-item").remove();
        getSum();
    })
    $(".clear-all").click(function() {
        $(".cart-item").remove();
        getSum();
    })
    $(".remove-batch").click(function() {
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    })
})