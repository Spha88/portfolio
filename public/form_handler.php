<?php 
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

// Clean inputs 
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

// Validate number
function validate_phone_number($phone) {
     // Allow +, - and . in phone number
     $filtered_phone_number = filter_var($phone, FILTER_SANITIZE_NUMBER_INT);
     // Remove "-" from number
     $phone_to_check = str_replace("-", "", $filtered_phone_number);
     // Check the length of number
     if (strlen($phone_to_check) < 10 || strlen($phone_to_check) > 14) {
        return false;
     } else {
       return true;
     }
}

  //Set variables to empty string to avoid undefined variable error
  $name = $number = $email = $subject = $message = $OK = '';


if( $_SERVER['REQUEST_METHOD'] == 'POST' ){

	
	$name = test_input( $_POST[ 'name' ] );
	$number = test_input( $_POST[ 'number' ] );
  $email = test_input( $_POST[ 'email' ] );
  $subject = test_input( $_POST[ 'subject']);
	$message = test_input( $_POST[ 'message' ] );

    //Validate the name of the client
    if ( !empty($name) ) {

    	if(strlen($name) > 40 ){
    		$OK = false;
    	 } else {

    		if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
                $OK = false;
              } else {
                $OK = true;
            }
    	 }
      } else {
      $OK = false;
    }


    //Validate the email
    if ($OK == true) {

        if(!empty($email)){

	      	if(strlen($email) > 40 ) {
               $OK = false;
	      	  } else {
               
                    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { 
	                    $OK = false;
	                  } else {
                        $OK = true;   
	                }
	      	}

	      } else {
	      	$OK = false;
	    }
    }

    // Validate the subject
    if( $OK == true) {
      if(!empty($subject)){
        if(strlen($subject) < 41) {
          $OK = true;
        } else {
          $OK = false;
        }
      } else {
        $OK = false;
      }
    }

       //Validate the message
    if ($OK == true) {
    	
    	if(!empty($message)){
           
            if(strlen($message) > 200){
              
                $OK = false;

              } else {

                 $OK = true;
            }

          } else {
            $OK = false;
        }
    }

    //sending the email
        if ($OK == true) {
          $to = "mr.smehlomakulu@gmail.com";
          $emailSubject = "Online query: ".$subject;
          $body = "Name of Client: ".$name."\n\nMessage: \n".$message;
          $headers =  "From: $name <$email>"; 
        
        if ( mail($to, $emailSubject, $body, $headers) ) {
            //  Email was sent
            echo json_encode(array("sent" => true, "message" => "Your message was sent"));
          } else {
            //  Email was not sent, server side validation failed
            echo json_encode(["sent" => false, "message" => "Something went wrong"]);
        }
      } else {
        echo json_encode(array("sent" => false, "message" => "validation failed"));
      }
}

 ?>