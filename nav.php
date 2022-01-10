<?php
                if (isset($_POST['s'])) {
                    $nama = $_POST['fnama'];
                    $alamat = $_POST['falamat'];
                    $email = $_POST['femail'];
                    $dateOfBirth = $_POST['fttl'];
                    $today = date("y-d-y");
                    $diff = date_diff(date_create($dateOfBirth), date_create($today));

                    echo    "Nama: $nama <br> 
                            alamat: $alamat<br> 
                            email: $email<br>
                            ";
                            echo 'you are' .$diff->format('%y')."year old";
                }
            
            ?>