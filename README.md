# WBE21
Praktikas von WBE [Pages](https://github.zhaw.ch/pages/zuelldar/WBE21/)


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></script>
    <script src="https://github.zhaw.ch/pages/bkrt/wbelabs/log.js"></script>
    <title>Lab 02</title>
</head>
<body>
<h1>Beispiele für Lab-Abgabe</h1>
<pre><code class="language-javascript">
//  Rekursive Implementierung der Fakultätsfunktion
//  
function faku (n) {
    if (n < 2) return 1
    else return n * faku(n - 1)
}
</code></pre>   
</body>
<script>
    //  Rekursive Implementierung der Fakultätsfunktion
    //  
    function faku (n) {
      if (n < 2) return 1
      else return n * faku(n - 1)
    }
    log("Demo Fakultätsfunktion", "h2")
    log('faku(0) = ' + faku(0))
    log('faku(5) = ' + faku(5))
    log('faku(10) = ' + faku(10))
   
</script>
<script>hljs.highlightAll()</script>
</html>
