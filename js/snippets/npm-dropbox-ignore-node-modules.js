export const npmDropboxIgnoreNodeModules = {
name : "Ignore npm node_modules on dropbox folder",
cats : ['npm'],
language : "Shell",
snippet : `
<pre><code data-language="shell">
  xattr -w com.dropbox.ignored 1 /path/to/your\ folder\ if\ has\ spaces/
</code></pre>
`
}