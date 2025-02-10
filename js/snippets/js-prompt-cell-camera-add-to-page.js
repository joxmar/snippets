export const snapApic = {
  name: 'prompt cell camera to snap a picture and add to page',
  cats: ['javascript', 'html', 'mobile'],
  language: 'html',
  snippet: `
<input id="selfie" type="file" accept="image/" capture="user"><br>
<img class="intro-img" src="https://picsum.photos/1024/768" alt="" width="200">

<script>
  let selfie = document.getElementById('selfie');
  let introImg = document.querySelector('.intro-img')
  selfie.onchange = evt => {
    const [file] = selfie.files
    if (file) {
      introImg.src = URL.createObjectURL(file)
    }
  }
</script>
`,
};
