export const mailchimpSuccess = {
name : "Hide MailChimp form on successful submit and thank you message",
cats : ['javascript', 'jQuery', 'Mailchimp'],
language : "HTML",
snippet : `<pre><code data-language="javascript">
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
<script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='FNAME';ftypes[1]='text';fnames[0]='EMAIL';ftypes[0]='email';}(jQuery));
//var $mcj = jQuery.noConflict(true);
</script>
<script>
    $(function(){
        //$("#mcm_hide_on_submit").hide();
        $(".button").on("click", function(){
            if ( $('#mce-success-response:visible') ) {
                console.log('Successfully signed up');
                $('#mc_hide_on_submit').hide();
                $('#mce-success-response').css('margin', "0");
            }
        });
    }); 
</script>
</code></pre>`
}