<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $dob = $_POST["dob"];
    $address = $_POST["address"];
    $aadhar = $_POST["aadhar"];

    // Write SQL query to insert data into the database
    $mydb = "INSERT INTO mytable (name, email, phone, dob, address, aadhar)
            VALUES ('$name', '$email', '$phone', '$dob', '$address', '$aadhar')";

    // Execute the query
    if (mysqli_query($conn, $sql)) {
        echo "Data inserted successfully";
    } else {
        echo "Error: " . $mydb . "<br>" . mysqli_error($conn);
    }
}
?>