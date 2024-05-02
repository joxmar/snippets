export const phpAjaxImgUploader = {
  name: 'Upload images to server using AJAX and PHP',
  cats: ['javascript', 'php', 'ajax'],
  language: 'php',
  snippet: [
    {
      tabName: 'index.php',
      content: `
  <!-- make sure to create the uploads folder first! -->
  <form id="upload_form" enctype="multipart/form-data">
    <input type="file" name="file" id="file">
    <input type="button" value="Upload File" onclick="uploadFile()">
  </form>
  <div id="upload_status"></div>
  <img id="uploaded_image" src="" alt="">
  <script>
    // get curreent site url
    var site_url = window.location.href;
    function uploadFile(){
      var file = document.getElementById("file").files[0];
      var formdata = new FormData();
      formdata.append("file", file);
      var ajax = new XMLHttpRequest();
      ajax.upload.addEventListener("progress", progressHandler, false);
      ajax.addEventListener("load", completeHandler, false);
      ajax.addEventListener("error", errorHandler, false);
      ajax.addEventListener("abort", abortHandler, false);
      ajax.open("POST", "uploader.php");
      ajax.send(formdata);
    }
    function progressHandler(event){
      document.getElementById("upload_status").innerHTML = "Upload Progress: " + event.loaded + " / " + event.total;
    }
    function completeHandler(event){
      console.log(event.target.responseText);
      var response = JSON.parse(event.target.responseText);      
      document.getElementById("upload_status").innerHTML = "Upload Complete";
      document.getElementById("uploaded_image").src = site_url + response.fileLocation;
    }
    function errorHandler(event){
      document.getElementById("upload_status").innerHTML = "Upload Failed";
    }
    function abortHandler(event){
      document.getElementById("upload_status").innerHTML = "Upload Aborted";
    }
  </script>`,
    },
    {
      tabName: 'uploader.php',
      content: `
      if(isset($_FILES['file'])){
        $file = $_FILES['file'];
        $fileName = $_FILES['file']['name'];
        $fileTmpName = $_FILES['file']['tmp_name'];
        $fileSize = $_FILES['file']['size'];
        $fileError = $_FILES['file']['error'];
        $fileType = $_FILES['file']['type'];
        
        $fileExt = explode('.', $fileName);
        $fileActualExt = strtolower(end($fileExt));
        
        $allowed = array('jpg', 'jpeg', 'png', 'pdf');
        
        if(in_array($fileActualExt, $allowed)){
          if($fileError === 0){
            if($fileSize < 1000000){
              $fileNameNew = uniqid('', true).".".$fileActualExt;
              $fileDestination = 'uploads/'.$fileNameNew;
              move_uploaded_file($fileTmpName, $fileDestination);
              // echo out a JSON response with the file location
              echo json_encode(['fileLocation' => $fileDestination]);
            }else{
              echo "Your file is too big!";
            }
          }else{
            echo "There was an error uploading your file!";
          }
        }else{
          echo "You cannot upload files of this type!";
        }
      }
      `,
    },
  ],
};
