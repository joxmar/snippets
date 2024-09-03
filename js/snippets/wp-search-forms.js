export const wpSearchQueries = {
  name: 'Wordpress search form and custom search queries',
  cats: ['php', 'wordpress'],
  language: 'html',
  snippet: `
<!-- wp global search -->
<form method="get" action="&lt;?php echo site_url('/'); ?&gt;">    
    <input type="text" size="16" name="s" value="Search"  />
    <input type="submit" value="Go" />
</form>

<!-- search on a specific category, must use id i.e.: 10 -->
<form method="get" action="&lt;?php echo site_url('/'); ?&gt;">
    <input type="hidden" name="cat" id="cat" value="10" />
    <input type="text" size="16" name="s" value="Search"  />
    <input type="submit" value="Go" />
</form>


<!-- search on a specific custom post type and hardcodded URL -->
<form method="get" action="https://www.site.com">
    <input type="hidden" name="post_type" value="custom-post-type-slug" />
    <input type="text" size="16" name="s" value="Search"  />
    <input type="submit" value="Go" />
</form>
`,
};
