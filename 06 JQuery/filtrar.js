$(document).ready(function() {

  // First - Last
    // $(".caja").first().css({ background: "black" });
    // $(".caja").last().css({ background: "black" });

  // Index
    // $(".caja").eq(2).css({ background: "black" });

  // Filter
    // $(".caja").filter("#segunda").css({ background: "#f9a03f" });

  // Filter inverso
    $(".caja").not("#segunda").css({ background: "#f9a03f" });

});