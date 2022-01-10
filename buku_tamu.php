<!DOCTYPE html>
<html lang="en"> 
    <head> 
        <meta charset="UTF-8"> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge"> 
        <title>Traditional food</title>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"/>
        <link rel="stylesheet" href="style.css"> 
                <link rel="shortcut icon" type="image/png" href="img/cone-shaped.png">
    </head>
    <body>
            <div class="jdl">
        <h2>daily Traditional food</h2>
    </div>

    <section id="header">
        <a class="logo" href="#"><img src="icon/kerak-telor.png" width="50px" height="50px" class="logo" alt=""></a>
        <div>
            <ul id="navbar">
                <li><a  href="index.html">Home</a></li>
                <li><a  class="active" href="buku_tamu.html">Buku tamu</a></li>
                <li><a  href="about.html">About</a></li>
                <li><a  href="#">Blog</a></li>

            </ul>
        </div>
    </section>

    <section class="src">
        <form action="">
            <a><input type="text" placeholder="Search.."></a>
            <button ><i class="fas fa-search"></i></button>
        </form>
    </section>
    
        <div class="line"></div>
    <section>
        <br>   <br>   <br>
    <div class="contaback">
      <div class="container">

            <form class="form-example" method="POST" action="<?php echo $_SERVER['PHP_SELF'];?>">
                <div >
                <div class="form-example">
                    <label>Nama lengkap</label>
                    <input type="text" name="fnama" placeholder="Nama Lengkap">
                </div>
                <div class="form-example">
                    <label>Umur(opsional)</label>
                    <input type="number" name="fumur" placeholder="Umur">
                </div>
                <div class="form-example">
                    <label>Alamat</label>
                    <input type="text" name="falamat" placeholder="Alamat">
                </div>
                <div class="form-example">
                    <label>Email</label>
                    <input type="email" name="femail" placeholder="Email">
                </div>
                <div class="form-example">
                    <label>Pesan dan kesan</label>
                    <input type="textarea" name="fpesankesan" placeholder="pesan dan kesan">
                </div>

            
                <div class="form-example">
                    <input type="submit" value="sumbit" name="s">
                </div>
                        <div>
                        <?php
                            if (isset($_POST['s'])){
                                $nama = $_POST['fnama'];
                                $umur = $_POST['fumur'];
                                $alamat = $_POST['falamat'];
                                $email = $_POST['femail'];
                                $pesankesan = $_POST['fpesankesan'];

                                echo "Nama : $nama <br>
                                    Umur: $umur <br>
                                    Alamat : $alamat <br>
                                    Email : $email <br>
                                    Pesan dan Kesan: $pesankesan";


                            }
                        
                        ?>

                            
                        </div>


    

            </form>
            </div>
            </div>
         </section>

    

        <section>
    <div class="footer-basic">
        <footer>
                       <div class="social"><a href="https://www.facebook.com/naseem.umar.masaid"><i class="fab fa-facebook"></i></a><a href="https://www.reddit.com/user/rexamir_152433"><i class="fab fa-reddit"></i></a><a href="https://www.instagram.com/naseem.masaid/ "><i class="fab fa-instagram"></i></a><a href="https://twitter.com/Naseemmasaid"><i class="fab fa-twitter-square"></i></a></div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">contact</a></li>
                <li class="list-inline-item"><a href="#">Services</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright">NASEEM UMAR MASAID © 2021</p>
        </footer>
    </div>
            </section>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>

<!-- credit to https://epicbootstrap.com/snippets/footer-basic -->

    </body>
</html>