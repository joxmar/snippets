export const phpAjaxImgUploader = {
  name: 'Upload images to server using AJAX and PHP',
  cats: ['javascript', 'php', 'ajax'],
  language: 'php',
  snippet: [
    {
      language: 'html',
      tabName: 'HTML + JS',
      content: `
  <!-- make sure to create the uploads folder first! -->
  <form id="upload_form" enctype="multipart/form-data">
    <!-- 
      "accept" attribute is used to specify the types of files to allow.
      In this case, "image/*" means that any file with a MIME type that starts with "image/" will be accepted.

      Other types of accept values:
      accept=".png, .jpg, .jpeg, .pdf"
      accept="application/pdf"
      accept="video/*"
      accept="audio/*"
      accept=".docx, .xlsx, .pptx"

      Remove the attribute to allow all file types, but be careful.
    -->
    <input type="file" name="file" id="file" accept="image/*">
    <input type="button" value="Upload File" onclick="uploadFile()">
  </form>
  <div id="upload_status"></div>
  <img id="uploaded_image" src="" alt="">
  <script>
    // validate file size
    document.getElementById("file").addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file.size > 2 * 1024 * 1024) {
        alert("You can upload the file of maximum 2MB only.");
        e.target.value = ""; // clears the file input so they don't upload it.
      }
    });

    // get current site url
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
      if(event.total > 1000000){
        return;
      }
      document.getElementById("upload_status").innerHTML = "Upload Progress: " + event.loaded + " / " + event.total;
    }
    function completeHandler(event){                       
      if(event.target.responseText.includes("error")){
        var response = JSON.parse(event.target.responseText);      
        alert(response.error);        
      } else {
        var response = JSON.parse(event.target.responseText);      
        document.getElementById("upload_status").innerHTML = "Upload Complete";
        document.getElementById("uploaded_image").src = site_url + response.fileLocation;
      }
      
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
      language: 'php',
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
    
    if($fileError === 0){
      $fileNameNew = $fileName; // uploads the file with original name, will replace if file with same name already exists
      // The one below uploads the file with a unique name instead of the original name to prevent overwrites. But we don't know the name it is random string.
      // $fileNameNew = uniqid('', true).".".$fileActualExt; 
      $fileDestination = 'uploads/'.$fileNameNew;
      move_uploaded_file($fileTmpName, $fileDestination);
      // echo out a JSON response with the file location
      echo json_encode(['fileLocation' => $fileDestination]);
    }else{     
      echo json_encode(['error' => "There was an error uploading your file!"]);    
    }
  }
      `,
    },
  ],
};
