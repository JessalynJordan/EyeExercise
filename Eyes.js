<html>
  <head> </head>
  <link rel="stylesheet" href="./eyes.css" />
  <body>
    <div class="eyes">
      <div class="eye">
        <div class="ball"></div>
      </div>
      <div class="eye">
        <div class="ball"></div>
      </div>
    </div>

  <script>
    var balls = document.getElementsByClassName("ball");
    document.onmousemove = (event) => {
      var x = (event.clientX * 100) / window.innerWidth + "%";
      var y = (event.clientY * 100) / window.innerHeight + "%";

      for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].style.transform = "translate(-" + x + ",-" + y + ")";
      }
    };
  </script>
</body>
</html>
